

//User
import { User } from './models/user/User';
import { UserServices } from './services/user/UserServices';
import { Customer } from './models/user/Customer';
import { CustomerServices } from "./services/user/CustomerServices";
import { Seller } from "./models/user/Seller";
import { SellerServices } from "./services/user/SellerServices";
import { Admin } from "./models/user/Admin";
import { AdminServices } from "./services/user/AdminServices";
import { AuditLog } from "./models/user/AuditLog";
import { AuditLogServices} from "./services/user/AuditLogServices";

// Shipment
import { Shipment } from "./models/shipment/Shipment";
import { ShipmentServices } from "./services/shipment/ShipmentServices";
import { ShipmentTracking } from "./models/shipment/ShipmentTracking";
import { ShipmentTrackingServices } from "./services/shipment/ShipmentTrackingServices";

// Review
import { Review } from "./models/review/Review";
import { ReviewServices } from "./services/review/ReviewServices";

// Refund
import { Refund } from "./models/refund/Refund";
import { RefundServices } from "./services/refund/RefundServices";

// Product
import { Product } from "./models/product/Product";
import { ProductServices } from "./services/product/ProductServices";
import { Discount } from "./models/product/Discount";
import { DiscountServices } from "./services/product/DiscountServices";
import { Category } from "./models/product/Category";

// Payment
import { Payment } from "./models/payment/Payment";
import { PaymentServices } from "./services/payment/PaymentServices";
import { PaymentMethod } from "./models/payment/PaymentMethod";

// Order
import { Order } from "./models/order/Order";
import { OrderServices } from "./services/order/OrderServices";
import { OrderItem } from "./models/order/OrderItem";
import { OrderItemServices } from "./services/order/OrderItemServices";

// Notification
import { Notification } from "./models/notification/Notification";
import { NotificationServices } from "./services/notification/NotificationServices";

// Invoice
import { Invoice } from "./models/invoice/Invoice";
import { InvoiceServices } from "./services/invoice/InvoiceServices";

// Delivery
import { DeliveryOption } from "./models/Delivery/DeliveryOption";
import { DeliveryType } from "./models/Delivery/DeliveryType";

// Cart
import { Cart } from "./models/cart/Cart";
import { CartServices } from "./services/cart/CartServices";
import { CartItem } from "./models/cart/CartItem";

// Address
import { Address } from "./models/address/Address";
import { AddressServices } from "./services/address/AddressServices";

// Store
import { Store } from "./models/store/Store";
import { StoreServices } from "./services/store/StoreServices";

// Address
const address1 = new Address("123 Main St", "Phnom Penh", "Phnom Penh", "Cambodia", "12000");
const address2 = new Address("456 Riverside", "Siem Reap", "Siem Reap", "Cambodia", "17000");
const address3 = new Address("789 Ocean Ave", "Sihanoukville", "Preah Sihanouk", "Cambodia", "18000");

// Delivery Options
const option1 = new DeliveryOption(DeliveryType.Standard, 3.99);
const option2 = new DeliveryOption(DeliveryType.Express, 7.99);
const option3 = new DeliveryOption(DeliveryType.SameDay, 12.99);

// Category
const electronics = new Category(1, "Electronics", "Devices and gadgets");
const books = new Category(2, "Books", "All kinds of books");
const clothing = new Category(3, "Clothing", "Men's and women's clothing");

// ShipmentTracking
const tracking1 = new ShipmentTracking("ABC123", "Shipped");
const tracking2 = new ShipmentTracking("XYZ789", "Delivered", new Date("2024-06-01T10:00:00"));
const tracking3 = new ShipmentTracking("LMN456", "In Transit");

// Shipment
const shipment1 = new Shipment(1, "SHIP123", option1, address1, tracking1);
const shipment2 = new Shipment(2, "SHIP456", option2, address2, tracking2);
const shipment3 = new Shipment(3, "SHIP789", option3, address3, tracking3);

// Store
const storeServices = new StoreServices();
const store1 = new Store(1, 'Tech Haven', 'Your one-stop tech shop', address1);
const store2 = new Store(2, 'Book Nook', 'Books for every reader', address2);
const store3 = new Store(3, 'Fashion Hub', 'Latest trends in clothing', address3);

// Seller
const seller1 = new Seller(1, 'Sokha', 'sokha@gmail.com', 'sokhapass', address1, store1);
const seller2 = new Seller(2, 'Vannak', 'vannak@gmail.com', 'vannakpass', address2, store2);
const seller3 = new Seller(3, 'Ravy', 'ravy@gmail.com', 'ravypass', address3, store3);

// Discount
const discount1 = new Discount("percentage", 0.10, true, 0, true);
const discount2 = new Discount("fixed", 5, false, 20, true);
const discount3 = new Discount("percentage", 0.2, true, 50, false);

// Product
const product1 = new Product(1, "Smartphone",electronics, 150, 100);
const product2 = new Product(2, "Laptop", electronics, 899, 50, discount2);
const product3 = new Product(3, "Novel", books, 19.99, 200, discount3);

storeServices.addProduct(store1, product1);

// Customer
const customer1 = new Customer(1, 'John Doe', 'johndoe@gmail.com', 'johnpass', address1);
const customer2 = new Customer(2, 'Jane Smith', 'janesmith@gmail.com', 'janepass', address2);
const customer3 = new Customer(3, 'Mike Johnson', 'mikejohnson@gmail.com', 'mikepass', address3);

// OrderItem
const orderItem1 = new OrderItem(product1, 2, shipment1, option1, seller1);
const orderItem2 = new OrderItem(product2, 1, shipment2, option2, seller2);
const orderItem3 = new OrderItem(product3, 3, shipment3, option3, seller3);
// console.log(orderItem1);

// Order
const order1 = new Order(1, customer1, "Pending", [orderItem1]);
const order2 = new Order(2, customer2, "Shipped", [orderItem2, orderItem3]);
const order3 = new Order(3, customer3, "Delivered", [orderItem3]);

// Payment
const payment1 = new Payment(1, order1, PaymentMethod.CreditCard, 11, "Completed", new Date("2024-05-01T12:00:00"));
const payment2 = new Payment(2, order2, PaymentMethod.Paypal, 899, "Pending", new Date("2024-05-02T14:30:00"));
const payment3 = new Payment(3, order3, PaymentMethod.CashOnDelivery, 19.99, "Failed", new Date("2024-05-03T16:45:00"));

// Review
const review1 = new Review(1, 5, "Great smartphone!", new Date("2024-05-01T12:00:00"), customer1, product1);
const review2 = new Review(2, 4, "Good laptop, but a bit expensive.", new Date("2024-05-02T14:30:00"), customer2, product2);
const review3 = new Review(3, 5, "Loved the novel!", new Date("2024-05-03T16:45:00"), customer3, product3);

// Refund
const refund1 = new Refund(1, order1, 299.99, "Product arrived damaged", new Date("2024-05-04T10:00:00"), "Pending");
const refund2 = new Refund(2, order2, 899.99, "Changed my mind", new Date("2024-05-05T11:00:00"), "Approved");

// Invoice
const invoice1 = new Invoice(1, order1, new Date("2024-05-01T12:00:00"), 299.99);
const invoice2 = new Invoice(2, order2, new Date("2024-05-02T14:30:00"), 899.99);

// Create cart items
const cartItem1 = new CartItem(product1, 2);
const cartItem2 = new CartItem(product2, 1);
const cartItem3 = new CartItem(product3, 3);

// Cart
const cart1 = new Cart(1, customer1);   
const cart2 = new Cart(2, customer2);
const cart3 = new Cart(3, customer3);

//Admin
const admin = new Admin(100, 'SuperAdmin', 'admin@example.com', 'adminpass');
const admin2 = new Admin(101, 'AdminJane', 'jane@example.com', 'janepass');
const admin3 = new Admin(102, 'AdminMike', 'mike@example.com', 'mikepass');


console.log("========== USERS ==========");
console.log("Customer 1:", customer1);
console.log("Customer 2:", customer2);
console.log("Customer 3:", customer3);
console.log("Seller 1:", seller1);
console.log("Seller 2:", seller2);
console.log("Seller 3:", seller3);
console.log("\n========== STORES ==========");
console.log("Store 1:", store1);
console.log("Store 2:", store2);
console.log("Store 3:", store3);

console.log("\n========== PRODUCTS ==========");
console.log("Product 1:", product1);
console.log("Product 2:", product2);
console.log("Product 3:", product3);

console.log("\n========== CARTS ==========");
console.log("Cart 1:", cart1);
console.log("Cart 2:", cart2);
console.log("Cart 3:", cart3);

console.log("\n========== ORDERS ==========");
console.log("Order 1:", order1);
console.log("Order 2:", order2);
console.log("Order 3:", order3);

console.log("\n========== PAYMENTS ==========");
console.log("Payment 1:", payment1);
console.log("Payment 2:", payment2);
console.log("Payment 3:", payment3);

console.log("\n========== REVIEWS ==========");
console.log("Review 1:", review1);
console.log("Review 2:", review2);
console.log("Review 3:", review3);

console.log("\n========== REFUNDS ==========");
console.log("Refund 1:", refund1);
console.log("Refund 2:", refund2);

console.log("\n========== INVOICES ==========");
console.log("Invoice 1:", invoice1);
console.log("Invoice 2:", invoice2);

console.log("\n========== SHIPMENTS ==========");
console.log("Shipment 1:", shipment1);
console.log("Shipment 2:", shipment2);
console.log("Shipment 3:", shipment3);

console.log("\n========== TRACKINGS ==========");
console.log("Tracking 1:", tracking1);
console.log("Tracking 2:", tracking2);
console.log("Tracking 3:", tracking3);

console.log("\n========== CATEGORIES ==========");
console.log("Electronics:", electronics);
console.log("Books:", books);
console.log("Clothing:", clothing);

console.log("\n========== DISCOUNTS ==========");
console.log("Discount 1:", discount1);
console.log("Discount 2:", discount2);
console.log("Discount 3:", discount3);

console.log("\n========== DELIVERY OPTIONS ==========");
console.log("Standard:", option1);
console.log("Express:", option2);
console.log("Same Day:", option3);

console.log("\n========== Admin ==========");
console.log(admin);
console.log(admin2);
console.log(admin3);






