import { Cart } from "../../models/cart/Cart";
import { Product } from "../../models/product/Product";
import { CartItem } from "../../models/cart/CartItem";

export class CartServices {
    addItem(cart: Cart, product: Product, quantity: number): void {
        const existingItem = cart.getItems().find(item => item.getProduct() === product);
        if (existingItem) {
            existingItem.setQuantity(existingItem.getQuantity() + quantity);
        } else {
            cart.getItems().push(new CartItem(product, quantity));
        }
    }

    removeItem(cart: Cart, product: Product): void {
        cart.setItems(cart.getItems().filter(item => item.getProduct() !== product));
    }

    getSubtotal(cart: Cart): number {
        return cart.getItems().reduce(
            (sum, item) => sum + (item.getProduct().getFinalPrice() * item.getQuantity()),
            0
        );
    }
}
