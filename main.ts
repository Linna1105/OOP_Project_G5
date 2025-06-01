import { Admin } from "./models/Admin";
import { Customer } from "./models/Customer";
import { Address } from "./models/address/Address";
import { OrderItem } from "./models/OrderItem";
import { Product } from "./models/product/Product";
import { Shipment } from "./models/Shipment";
import { DeliveryOption, DeliveryType } from "./models/DeliveryOption";
import { Seller } from "./models/user/Seller";

// Admin
const admin = new Admin(1, "Admin A", "admin@example.com", "pass");

// Address
const address = new Address("123 Main St", "Townsville", "Start", "333", "12345");

// Customer
const customer = new Customer(2, "John Doe", "john@example.com", "password", address);

// Seller
const seller1 = new Seller(3, "Seller B", "seller@example.com", "sellerpass", "StoreName", address);

// Simulate usage
customer.register();
customer.login();
customer.browseProducts();
customer.addToCart("Laptop");
const order = customer.placeOrder();
customer.writeReview("Laptop", 5, "Great product!");

// Product
const product = new Product(12, "Laptop", "computer", 1500, 10.21, 22, seller1);

// Shipment (assuming it takes: id, provider, trackingNumber, destination: Address)
const shipment = new Shipment(2, "FedEx", "2345", address);

// DeliveryOption (make sure DeliveryType is imported from enum or type)
const deliveryOption = new DeliveryOption(DeliveryType.Express, 2);

// OrderItem
const item = new OrderItem(product, 2, shipment, deliveryOption);

// Refund
const refund = customer.cancelOrderItem(item);

// Admin actions
admin.manageUser(customer, "add");
admin.viewAllUsers();
admin.manageRefunds();
