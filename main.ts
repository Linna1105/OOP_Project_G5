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


const address = new Address("123 Main St", "Springfield", "IL", "62704", "USA");
const deliveryOption = new DeliveryOption(DeliveryType.Standard, 5);



const newDeliveryOption = new DeliveryOption(DeliveryType.Express, 10);


//Admin

// Create admin and service instance
const admin = new Admin(100, 'SuperAdmin', 'admin@example.com', 'adminpass');
const adminService = new AdminServices();

// Create additional admin instances
const admin2 = new Admin(101, 'AdminJane', 'jane@example.com', 'janepass');
const admin3 = new Admin(102, 'AdminMike', 'mike@example.com', 'mikepass');
console.log(admin.displayInfo());
console.log(admin2);
console.log(admin3);

