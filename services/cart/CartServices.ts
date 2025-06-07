import { Cart } from "../../models/cart/Cart";
import { Product } from "../../models/product/Product";
import { CartItem } from "../../models/cart/CartItem";

export class CartServices {
   /**
 * Adds a product to the cart. If the product already exists in the cart,
 * it increases the quantity instead of adding a new item.
 *
 * @param cart - The Cart object to which the product should be added.
 * @param product - The Product to be added.
 * @param quantity - The quantity of the product to add.
 */
addItem(cart: Cart, product: Product, quantity: number): void {
    const existingItem = cart.getItems().find(item => item.getProduct() === product);
    if (existingItem) {
        existingItem.setQuantity(existingItem.getQuantity() + quantity);
    } else {
        cart.getItems().push(new CartItem(product, quantity));
    }
}

/**
 * Removes a product from the cart based on the product reference.
 *
 * @param cart - The Cart object from which the product should be removed.
 * @param product - The Product to remove.
 */
removeItem(cart: Cart, product: Product): void {
    cart.setItems(cart.getItems().filter(item => item.getProduct() !== product));
}

/**
 * Calculates the subtotal cost of all items in the cart,
 * taking into account the final price (after discounts) and quantity of each product.
 *
 * @param cart - The Cart object to calculate the subtotal for.
 * @returns The total cost of all items before shipping or taxes.
 */
getSubtotal(cart: Cart): number {
    return cart.getItems().reduce(
        (sum, item) => sum + (item.getProduct().getFinalPrice() * item.getQuantity()),
        0
    );
}

}
