import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { CartItem, Size } from '../types';

interface CartState {
  items: CartItem[];
  isCartOpen: boolean;
  isRequestAccessOpen: boolean;
  requestAccessCategory?: string;
  isSizeGuideOpen: boolean;
  lightboxIndex: number | null;
  
  // Actions
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  
  openRequestAccess: (category?: string) => void;
  closeRequestAccess: () => void;
  
  openSizeGuide: () => void;
  closeSizeGuide: () => void;
  
  openLightbox: (index: number) => void;
  closeLightbox: () => void;
  setLightboxIndex: (index: number) => void;
  
  addItem: (item: {
    productId: string;
    slug: string;
    name: string;
    code: string;
    color: string;
    size: Size;
    price: number;
    image: string;
    maxStock: number;
    quantity?: number;
  }) => void;
  
  removeItem: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  
  // Computed helpers
  getItemCount: () => number;
  getSubtotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isCartOpen: false,
      isRequestAccessOpen: false,
      requestAccessCategory: undefined,
      isSizeGuideOpen: false,
      lightboxIndex: null,

      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),
      toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

      openRequestAccess: (category) => set({ isRequestAccessOpen: true, requestAccessCategory: category }),
      closeRequestAccess: () => set({ isRequestAccessOpen: false, requestAccessCategory: undefined }),

      openSizeGuide: () => set({ isSizeGuideOpen: true }),
      closeSizeGuide: () => set({ isSizeGuideOpen: false }),

      openLightbox: (index) => set({ lightboxIndex: index }),
      closeLightbox: () => set({ lightboxIndex: null }),
      setLightboxIndex: (index) => set({ lightboxIndex: index }),

      addItem: (itemData) => {
        const { items } = get();
        const cartItemId = `${itemData.productId}-${itemData.color}-${itemData.size}`;
        const existingItem = items.find((i) => i.cartItemId === cartItemId);
        const qtyToAdd = itemData.quantity || 1;

        if (existingItem) {
          const newQuantity = Math.min(existingItem.quantity + qtyToAdd, itemData.maxStock);
          set({
            items: items.map((i) =>
              i.cartItemId === cartItemId ? { ...i, quantity: newQuantity } : i
            ),
          });
        } else {
          const newItem: CartItem = {
            cartItemId,
            productId: itemData.productId,
            slug: itemData.slug,
            name: itemData.name,
            code: itemData.code,
            color: itemData.color,
            size: itemData.size,
            price: itemData.price,
            quantity: Math.min(qtyToAdd, itemData.maxStock),
            image: itemData.image,
            maxStock: itemData.maxStock,
          };
          set({ items: [...items, newItem] });
        }
      },

      removeItem: (cartItemId) => {
        set((state) => ({
          items: state.items.filter((i) => i.cartItemId !== cartItemId),
        }));
      },

      updateQuantity: (cartItemId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(cartItemId);
          return;
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.cartItemId === cartItemId
              ? { ...i, quantity: Math.min(quantity, i.maxStock) }
              : i
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      getItemCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getSubtotal: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    }),
    {
      name: 'lm_cart_storage_v1',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ items: state.items }),
    }
  )
);
