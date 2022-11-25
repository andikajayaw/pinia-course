import { defineStore } from "pinia";

export const useCartStore = defineStore("CartStore", {
    state: () => {
        return {
            items: [],
        }
    },
    actions: {
        addItems(count, product) {
            count = parseInt(count);
            for (let i = 0; i < count; i++) {
                this.items.push(product);
            }
        }
    }
})