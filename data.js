// Mock Data
        const shops = [
            {
                id: 1,
                name: "Krishna Grocery Store",
                category: "Grocery",
                rating: 4.5,
                reviews: 124,
                distance: 1.2,
                image: "https://picsum.photos/seed/shop1/300/200.jpg",
                address: "123 Main Street, Sector 15, Delhi - 110001",
                phone: "+91 98765 43210",
                owner: "Ramesh Kumar",
                description: "Your neighborhood grocery store with fresh vegetables, fruits, spices, and all daily essentials.",
                deliveryTime: "30-45 mins",
                minOrder: 100,
                deliveryFee: 20
            },
            {
                id: 2,
                name: "Saree Emporium",
                category: "Fashion",
                rating: 4.7,
                reviews: 89,
                distance: 0.8,
                image: "https://picsum.photos/seed/shop2/300/200.jpg",
                address: "45 Fashion Street, Sector 22, Delhi - 110022",
                phone: "+91 98765 54321",
                owner: "Anita Verma",
                description: "Traditional and modern sarees for all occasions with exclusive designs.",
                deliveryTime: "2-3 days",
                minOrder: 500,
                deliveryFee: 0
            },
            {
                id: 3,
                name: "Spice Hub",
                category: "Spices",
                rating: 4.6,
                reviews: 67,
                distance: 2.1,
                image: "https://picsum.photos/seed/shop3/300/200.jpg",
                address: "78 Market Road, Sector 8, Delhi - 110008",
                phone: "+91 98765 65432",
                owner: "Raj Patel",
                description: "Authentic Indian spices from different regions, freshly ground and packed.",
                deliveryTime: "45-60 mins",
                minOrder: 200,
                deliveryFee: 30
            },
            {
                id: 4,
                name: "Sweet Delights",
                category: "Food",
                rating: 4.8,
                reviews: 156,
                distance: 1.5,
                image: "https://picsum.photos/seed/shop4/300/200.jpg",
                address: "90 Food Plaza, Sector 18, Delhi - 110018",
                phone: "+91 98765 76543",
                owner: "Priya Sharma",
                description: "Homemade sweets and snacks made with love and traditional recipes.",
                deliveryTime: "60-90 mins",
                minOrder: 150,
                deliveryFee: 25
            },
            {
                id: 5,
                name: "Tech Zone",
                category: "Electronics",
                rating: 4.3,
                reviews: 98,
                distance: 3.2,
                image: "https://picsum.photos/seed/shop5/300/200.jpg",
                address: "12 Electronics Market, Sector 25, Delhi - 110025",
                phone: "+91 98765 87654",
                owner: "Vikram Singh",
                description: "Latest electronics and gadgets at competitive prices with warranty.",
                deliveryTime: "Same day",
                minOrder: 1000,
                deliveryFee: 50
            },
            {
                id: 6,
                name: "Home Decor",
                category: "Home",
                rating: 4.4,
                reviews: 72,
                distance: 2.5,
                image: "https://picsum.photos/seed/shop6/300/200.jpg",
                address: "34 Lifestyle Avenue, Sector 30, Delhi - 110030",
                phone: "+91 98765 98765",
                owner: "Neha Gupta",
                description: "Beautiful home decor items to make your living space special.",
                deliveryTime: "3-5 days",
                minOrder: 300,
                deliveryFee: 40
            }
        ];

        const products = [
            {
                id: 1,
                shopId: 1,
                name: "Fresh Tomatoes",
                category: "Vegetables",
                price: 40,
                originalPrice: 50,
                stock: 50,
                lowStockAlert: 10,
                image: "https://picsum.photos/seed/tomato/200/200.jpg",
                unit: "kg",
                discount: 20,
                description: "Fresh, red tomatoes from local farms",
                rating: 4.5
            },
            {
                id: 2,
                shopId: 1,
                name: "Organic Apples",
                category: "Fruits",
                price: 120,
                originalPrice: 150,
                stock: 30,
                lowStockAlert: 5,
                image: "https://picsum.photos/seed/apple/200/200.jpg",
                unit: "kg",
                discount: 20,
                description: "Crispy and sweet organic apples",
                rating: 4.7
            },
            {
                id: 3,
                shopId: 3,
                name: "Turmeric Powder",
                category: "Spices",
                price: 85,
                originalPrice: 100,
                stock: 8,
                lowStockAlert: 10,
                image: "https://picsum.photos/seed/turmeric/200/200.jpg",
                unit: "100g",
                discount: 15,
                description: "Pure turmeric powder with no additives",
                rating: 4.6
            },
            {
                id: 4,
                shopId: 1,
                name: "Fresh Milk",
                category: "Dairy",
                price: 55,
                originalPrice: 60,
                stock: 25,
                lowStockAlert: 5,
                image: "https://picsum.photos/seed/milk/200/200.jpg",
                unit: "1L",
                discount: 8,
                description: "Farm-fresh cow milk",
                rating: 4.8
            },
            {
                id: 5,
                shopId: 1,
                name: "Basmati Rice",
                category: "Grocery",
                price: 150,
                originalPrice: 180,
                stock: 40,
                lowStockAlert: 10,
                image: "https://picsum.photos/seed/rice/200/200.jpg",
                unit: "kg",
                discount: 17,
                description: "Premium quality basmati rice",
                rating: 4.6
            },
            {
                id: 6,
                shopId: 1,
                name: "Green Chilies",
                category: "Vegetables",
                price: 20,
                originalPrice: 25,
                stock: 15,
                lowStockAlert: 5,
                image: "https://picsum.photos/seed/chili/200/200.jpg",
                unit: "100g",
                discount: 20,
                description: "Fresh green chilies with medium spice",
                rating: 4.3
            },
            {
                id: 7,
                shopId: 2,
                name: "Silk Saree",
                category: "Fashion",
                price: 2500,
                originalPrice: 3000,
                stock: 5,
                lowStockAlert: 2,
                image: "https://picsum.photos/seed/saree1/200/200.jpg",
                unit: "piece",
                discount: 17,
                description: "Elegant silk saree with traditional design",
                rating: 4.8
            },
            {
                id: 8,
                shopId: 2,
                name: "Cotton Saree",
                category: "Fashion",
                price: 800,
                originalPrice: 1000,
                stock: 10,
                lowStockAlert: 3,
                image: "https://picsum.photos/seed/saree2/200/200.jpg",
                unit: "piece",
                discount: 20,
                description: "Comfortable cotton saree for daily wear",
                rating: 4.5
            },
            {
                id: 9,
                shopId: 4,
                name: "Gulab Jamun",
                category: "Sweets",
                price: 300,
                originalPrice: 350,
                stock: 20,
                lowStockAlert: 5,
                image: "https://picsum.photos/seed/gulab/200/200.jpg",
                unit: "kg",
                discount: 14,
                description: "Soft and sweet gulab jamuns",
                rating: 4.9
            },
            {
                id: 10,
                shopId: 4,
                name: "Rasgulla",
                category: "Sweets",
                price: 250,
                originalPrice: 280,
                stock: 15,
                lowStockAlert: 3,
                image: "https://picsum.photos/seed/rasgulla/200/200.jpg",
                unit: "kg",
                discount: 11,
                description: "Spongy rasgullas in sugar syrup",
                rating: 4.7
            },
            {
                id: 11,
                shopId: 5,
                name: "Smartphone",
                category: "Electronics",
                price: 12000,
                originalPrice: 15000,
                stock: 3,
                lowStockAlert: 1,
                image: "https://picsum.photos/seed/phone/200/200.jpg",
                unit: "piece",
                discount: 20,
                description: "Latest smartphone with advanced features",
                rating: 4.4
            },
            {
                id: 12,
                shopId: 1,
                name: "Whole Wheat Bread",
                category: "Bakery",
                price: 45,
                originalPrice: 50,
                stock: 12,
                lowStockAlert: 3,
                image: "https://picsum.photos/seed/bread/200/200.jpg",
                unit: "piece",
                discount: 10,
                description: "Healthy whole wheat bread",
                rating: 4.6
            }
        ];

        const orders = [
            {
                id: "ORD001",
                shop: "Krishna Grocery Store",
                date: "2023-10-15",
                amount: 450,
                status: "delivered",
                items: ["Fresh Tomatoes", "Organic Apples", "Basmati Rice"],
                deliveryAddress: "123, ABC Apartments, Sector 15, Delhi - 110001",
                paymentMethod: "COD",
                deliveryTime: "35 mins"
            },
            {
                id: "ORD002",
                shop: "Saree Emporium",
                date: "2023-10-18",
                amount: 2500,
                status: "processing",
                items: ["Silk Saree", "Cotton Saree"],
                deliveryAddress: "456, XYZ Colony, Sector 22, Delhi - 110022",
                paymentMethod: "Online",
                deliveryTime: "2-3 days"
            },
            {
                id: "ORD003",
                shop: "Spice Hub",
                date: "2023-10-20",
                amount: 320,
                status: "pending",
                items: ["Turmeric Powder", "Cumin Seeds", "Coriander Powder"],
                deliveryAddress: "789, PQR Street, Sector 8, Delhi - 110008",
                paymentMethod: "UPI",
                deliveryTime: "45-60 mins"
            }
        ];

        const reviews = [
            {
                id: 1,
                user: "Amit Kumar",
                userImage: "https://picsum.photos/seed/reviewer1/50/50.jpg",
                rating: 5,
                date: "2023-10-20",
                comment: "Excellent quality products and very reasonable prices. The owner is very friendly and helpful. Got my order in just 30 minutes! Highly recommended!",
                verified: true,
                helpful: 12
            },
            {
                id: 2,
                user: "Sneha Reddy",
                userImage: "https://picsum.photos/seed/reviewer2/50/50.jpg",
                rating: 4,
                date: "2023-10-18",
                comment: "Good variety of fresh vegetables. Sometimes they run out of stock on popular items, but overall a great local store. The app makes ordering so convenient!",
                verified: true,
                helpful: 8
            },
            {
                id: 3,
                user: "Rohit Sharma",
                userImage: "https://picsum.photos/seed/reviewer3/50/50.jpg",
                rating: 5,
                date: "2023-10-15",
                comment: "I've been shopping here for years. The quality is always consistent and the prices are better than big supermarkets. The personal touch makes all the difference!",
                verified: false,
                helpful: 15
            }
        ];

        // Cart System
        let cart = JSON.parse(localStorage.getItem('vyaparCart')) || [];
        let deliveryOption = 'home';
        let appliedPromoCode = null;
        let deliveryAddresses = [
            '123, ABC Apartments, Sector 15, Delhi - 110001',
            '456, XYZ Colony, Sector 22, Delhi - 110022'
        ];

        function getCartDetails() {
            let subtotal = 0;
            let totalDiscount = 0;
            let cartItems = [];
            
            cart.forEach(item => {
                const product = products.find(p => p.id === item.productId);
                if (product) {
                    const itemTotal = product.price * item.quantity;
                    const originalTotal = product.originalPrice * item.quantity;
                    const itemDiscount = originalTotal - itemTotal;
                    
                    subtotal += itemTotal;
                    totalDiscount += itemDiscount;
                    
                    cartItems.push({
                        ...product,
                        quantity: item.quantity,
                        itemTotal,
                        originalTotal,
                        itemDiscount
                    });
                }
            });
            
            // Calculate delivery fee
            let deliveryFee = 0;
            if (deliveryOption === 'home' && cartItems.length > 0) {
                const shopIds = [...new Set(cartItems.map(item => item.shopId))];
                deliveryFee = Math.max(...shopIds.map(shopId => {
                    const shop = shops.find(s => s.id === shopId);
                    return shop ? shop.deliveryFee : 0;
                }));
            }
            
            // Calculate taxes (5%)
            const taxes = (subtotal * 0.05);
            
            // Apply promo code discount
            let promoDiscount = 0;
            if (appliedPromoCode) {
                if (appliedPromoCode.type === 'percentage') {
                    promoDiscount = subtotal * (appliedPromoCode.value / 100);
                } else {
                    promoDiscount = appliedPromoCode.value;
                }
            }
            
            const total = subtotal - promoDiscount + deliveryFee + taxes;
            
            return {
                cartItems,
                subtotal,
                totalDiscount: totalDiscount + promoDiscount,
                deliveryFee,
                taxes,
                total,
                promoDiscount
            };
        }

        function updateCartUI() {
            const cartCount = document.getElementById('cartCount');
            const cartItems = document.getElementById('cartItems');
            
            if (cartCount) {
                const count = getCartItemCount();
                cartCount.textContent = count;
                cartCount.style.display = count > 0 ? 'block' : 'none';
            }
            
            const cartDetails = getCartDetails();
            
            if (cartItems) {
                if (cart.length === 0) {
                    cartItems.innerHTML = `
                        <div class="text-center py-8">
                            <i class="fas fa-shopping-cart text-4xl text-gray-300 mb-4"></i>
                            <p class="text-gray-500">Your cart is empty</p>
                            <button onclick="closeCartSidebar()" class="mt-4 px-4 py-2 bg-accent-orange text-white rounded-lg hover:bg-orange-600 transition">
                                Continue Shopping
                            </button>
                        </div>
                    `;
                } else {
                    cartItems.innerHTML = cartDetails.cartItems.map(item => `
                        <div class="flex items-center space-x-4 p-4 border-b border-gray-200">
                            <img src="${item.image}" alt="${item.name}" class="w-20 h-20 rounded-lg object-cover">
                            <div class="flex-1">
                                <h4 class="font-medium text-primary">${item.name}</h4>
                                <p class="text-sm text-gray-600">${item.unit}</p>
                                <div class="flex items-center space-x-2 mt-1">
                                    <span class="font-semibold text-primary">₹${item.price}</span>
                                    ${item.discount > 0 ? `
                                        <span class="text-sm text-gray-400 line-through">₹${item.originalPrice}</span>
                                        <span class="text-xs bg-red-100 text-red-600 px-1 rounded">${item.discount}% OFF</span>
                                    ` : ''}
                                </div>
                            </div>
                            <div class="flex flex-col items-end space-y-2">
                                <div class="flex items-center space-x-2">
                                    <button onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})" 
                                            class="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 transition flex items-center justify-center">
                                        <i class="fas fa-minus text-xs"></i>
                                    </button>
                                    <span class="w-12 text-center font-medium">${item.quantity}</span>
                                    <button onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})" 
                                            class="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 transition flex items-center justify-center">
                                        <i class="fas fa-plus text-xs"></i>
                                    </button>
                                </div>
                                <button onclick="removeFromCart(${item.id})" 
                                        class="text-red-500 hover:text-red-700 transition text-sm">
                                    <i class="fas fa-trash"></i> Remove
                                </button>
                            </div>
                        </div>
                    `).join('');
                }
                
                // Update price breakdown
                document.getElementById('subtotal').textContent = `₹${cartDetails.subtotal.toFixed(2)}`;
                document.getElementById('discount').textContent = `-₹${cartDetails.totalDiscount.toFixed(2)}`;
                document.getElementById('deliveryFee').textContent = `₹${cartDetails.deliveryFee.toFixed(2)}`;
                document.getElementById('taxes').textContent = `₹${cartDetails.taxes.toFixed(2)}`;
                document.getElementById('cartTotal').textContent = `₹${cartDetails.total.toFixed(2)}`;
            }
        }

        function addToCart(productId, quantity = 1) {
            const product = products.find(p => p.id === productId);
            if (!product) return;

            if (product.stock < quantity) {
                showToast(`Only ${product.stock} ${product.unit} available in stock!`, 'error');
                return;
            }

            const existingItem = cart.find(item => item.productId === productId);
            
            if (existingItem) {
                if (existingItem.quantity + quantity > product.stock) {
                    showToast(`Cannot add more than ${product.stock} ${product.unit}!`, 'error');
                    return;
                }
                existingItem.quantity += quantity;
            } else {
                cart.push({
                    productId,
                    quantity,
                    shopId: product.shopId,
                    addedAt: new Date().toISOString()
                });
            }

            saveCart();
            updateCartUI();
            showToast(`${product.name} added to cart!`, 'success');
            
            // Update stock display
            loadShopProducts();
        }

        function removeFromCart(productId) {
            cart = cart.filter(item => item.productId !== productId);
            saveCart();
            updateCartUI();
            showToast('Item removed from cart', 'info');
        }

        function updateCartQuantity(productId, quantity) {
            const product = products.find(p => p.id === productId);
            if (!product) return;

            if (quantity > product.stock) {
                showToast(`Only ${product.stock} ${product.unit} available!`, 'error');
                updateCartUI();
                return;
            }

            if (quantity <= 0) {
                removeFromCart(productId);
                return;
            }

            const item = cart.find(item => item.productId === productId);
            if (item) {
                item.quantity = quantity;
                saveCart();
                updateCartUI();
            }
        }

        function saveCart() {
            localStorage.setItem('vyaparCart', JSON.stringify(cart));
        }

        function getCartItemCount() {
            return cart.reduce((count, item) => count + item.quantity, 0);
        }

        function clearCart() {
            cart = [];
            saveCart();
            updateCartUI();
            showToast('Cart cleared', 'info');
        }

        function showCartSidebar() {
            const sidebar = document.getElementById('cartSidebar');
            if (sidebar) {
                sidebar.classList.remove('translate-x-full');
                updateCartUI();
            }
        }

        function closeCartSidebar() {
            const sidebar = document.getElementById('cartSidebar');
            if (sidebar) {
                sidebar.classList.add('translate-x-full');
            }
        }

        function showCheckoutModal() {
            if (cart.length === 0) {
                showToast('Your cart is empty!', 'error');
                return;
            }
            
            const modal = document.getElementById('checkoutModal');
            modal.classList.remove('hidden');
            
            // Load checkout items
            const cartDetails = getCartDetails();
            const checkoutItems = document.getElementById('checkoutItems');
            
            checkoutItems.innerHTML = cartDetails.cartItems.map(item => `
                <div class="flex justify-between items-center">
                    <div>
                        <span class="font-medium">${item.name}</span>
                        <span class="text-gray-600 text-sm ml-2">x${item.quantity}</span>
                    </div>
                    <span class="font-medium">₹${item.itemTotal.toFixed(2)}</span>
                </div>
            `).join('');
            
            // Update checkout prices
            document.getElementById('checkoutSubtotal').textContent = `₹${cartDetails.subtotal.toFixed(2)}`;
            document.getElementById('checkoutDiscount').textContent = `-₹${cartDetails.totalDiscount.toFixed(2)}`;
            document.getElementById('checkoutDelivery').textContent = `₹${cartDetails.deliveryFee.toFixed(2)}`;
            document.getElementById('checkoutTaxes').textContent = `₹${cartDetails.taxes.toFixed(2)}`;
            document.getElementById('checkoutTotal').textContent = `₹${cartDetails.total.toFixed(2)}`;
            
            // Update delivery price
            document.getElementById('homeDeliveryPrice').textContent = `₹${cartDetails.deliveryFee.toFixed(2)}`;
        }

        function closeCheckoutModal() {
            document.getElementById('checkoutModal').classList.add('hidden');
        }

        function updateDeliveryOption(option) {
            deliveryOption = option;
            updateCartUI();
            showCheckoutModal();
        }

        function applyPromoCode() {
            const promoInput = document.getElementById('promoCode');
            const promoMessage = document.getElementById('promoMessage');
            const code = promoInput.value.trim().toUpperCase();
            
            const promoCodes = {
                'SAVE10': { type: 'percentage', value: 10, description: '10% off on total order' },
                'SAVE50': { type: 'fixed', value: 50, description: '₹50 off on orders above ₹500' },
                'FIRST100': { type: 'fixed', value: 100, description: '₹100 off for first time users' },
                'FREEDelivery': { type: 'fixed', value: 30, description: 'Free delivery (₹30 off)' }
            };
            
            if (promoCodes[code]) {
                appliedPromoCode = promoCodes[code];
                promoMessage.innerHTML = `<span class="text-green-600">✓ ${promoCodes[code].description}</span>`;
                promoInput.disabled = true;
                updateCartUI();
                showCheckoutModal();
                showToast('Promo code applied successfully!', 'success');
            } else {
                promoMessage.innerHTML = `<span class="text-red-600">✗ Invalid promo code</span>`;
                setTimeout(() => {
                    promoMessage.innerHTML = '';
                }, 3000);
            }
        }

        function showAddAddressForm() {
            document.getElementById('addAddressModal').classList.remove('hidden');
        }

        function closeAddAddressModal() {
            document.getElementById('addAddressModal').classList.add('hidden');
        }

        function addNewAddress(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            const newAddress = `${formData.get('street')}, ${formData.get('city')} - ${formData.get('pincode')}`;
            deliveryAddresses.push(newAddress);
            
            const addressSelect = document.getElementById('addressSelect');
            const option = document.createElement('option');
            option.value = newAddress;
            option.textContent = `${formData.get('type')} - ${newAddress}`;
            addressSelect.appendChild(option);
            option.selected = true;
            
            closeAddAddressModal();
            showToast('Address added successfully!', 'success');
        }

        function placeOrder() {
            const addressSelect = document.getElementById('addressSelect');
            const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
            
            if (deliveryOption === 'home' && !addressSelect.value) {
                showToast('Please select a delivery address', 'error');
                return;
            }
            
            const cartDetails = getCartDetails();
            const orderId = 'ORD' + Date.now();
            
            // Group cart items by shop
            const cartByShop = {};
            cart.forEach(item => {
                if (!cartByShop[item.shopId]) {
                    cartByShop[item.shopId] = [];
                }
                cartByShop[item.shopId].push(item);
            });
            
            // Create orders for each shop
            const newOrders = Object.keys(cartByShop).map(shopId => {
                const shop = shops.find(s => s.id == shopId);
                const items = cartByShop[shopId].map(item => {
                    const product = products.find(p => p.id === item.productId);
                    return product.name;
                });
                
                const shopTotal = cartByShop[shopId].reduce((total, item) => {
                    const product = products.find(p => p.id === item.productId);
                    return total + (product ? product.price * item.quantity : 0);
                }, 0);
                
                return {
                    id: orderId + '_' + shopId,
                    shop: shop.name,
                    date: new Date().toISOString().split('T')[0],
                    amount: shopTotal,
                    status: "pending",
                    items: items,
                    deliveryAddress: deliveryOption === 'home' ? addressSelect.value : 'Store Pickup',
                    paymentMethod: paymentMethod === 'online' ? 'Online' : 'COD',
                    deliveryTime: deliveryOption === 'home' ? shop.deliveryTime : 'Ready for pickup'
                };
            });
            
            // Add new orders to the beginning of orders array
            orders.unshift(...newOrders);
            
            // Update stock
            cart.forEach(item => {
                const product = products.find(p => p.id === item.productId);
                if (product) {
                    product.stock -= item.quantity;
                }
            });
            
            // Clear cart and reset
            clearCart();
            appliedPromoCode = null;
            document.getElementById('promoCode').value = '';
            document.getElementById('promoCode').disabled = false;
            document.getElementById('promoMessage').innerHTML = '';
            
            // Close modals
            closeCheckoutModal();
            
            // Show success modal
            document.getElementById('orderId').textContent = orderId;
            document.getElementById('paymentSuccessModal').classList.remove('hidden');
            
            // Reload products to show updated stock
            loadShopProducts();
        }

        function closePaymentSuccessModal() {
            document.getElementById('paymentSuccessModal').classList.add('hidden');
            showPage('orders');
            loadOrdersList();
        }

        function showToast(message, type = 'success') {
            const toast = document.getElementById('toast');
            const toastMessage = document.getElementById('toastMessage');
            
            toastMessage.textContent = message;
            
            toast.className = 'fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-300 z-50';
            
            switch(type) {
                case 'error':
                    toast.classList.add('bg-red-500', 'text-white');
                    break;
                case 'info':
                    toast.classList.add('bg-blue-500', 'text-white');
                    break;
                case 'warning':
                    toast.classList.add('bg-yellow-500', 'text-white');
                    break;
                default:
                    toast.classList.add('bg-green-500', 'text-white');
            }
            
            toast.classList.remove('translate-y-full');
            
            setTimeout(() => {
                toast.classList.add('translate-y-full');
            }, 3000);
        }

        function showPage(pageName) {
            document.querySelectorAll('.page').forEach(page => {
                page.classList.add('hidden');
            });
            
            const pageElement = document.getElementById(pageName + 'Page');
            if (pageElement) {
                pageElement.classList.remove('hidden');
                pageElement.classList.add('fade-in');
            }
            
            document.getElementById('userMenu').classList.add('hidden');
        }

        function toggleUserMenu() {
            const userMenu = document.getElementById('userMenu');
            userMenu.classList.toggle('hidden');
        }

        function switchTab(tabName) {
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.add('hidden');
            });
            
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('tab-active');
                btn.classList.add('text-gray-600');
            });
            
            document.getElementById(tabName + 'Tab').classList.remove('hidden');
            event.target.classList.add('tab-active');
            event.target.classList.remove('text-gray-600');
        }

        function filterByCategory(category) {
            showToast(`Showing ${category} shops`, 'info');
            showPage('shopProfile');
        }

        function filterOrders(status) {
            showToast(`Showing ${status} orders`, 'info');
        }

        function logout() {
            showToast('Logged out successfully!', 'info');
        }

        function loadFeaturedShops() {
            const container = document.getElementById('featuredShops');
            const featuredShops = shops.slice(0, 3);
            
            container.innerHTML = featuredShops.map(shop => `
                <div class="bg-white rounded-xl overflow-hidden card-shadow hover-lift cursor-pointer" onclick="showPage('shopProfile')">
                    <img src="${shop.image}" alt="${shop.name}" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h3 class="font-semibold text-primary mb-2">${shop.name}</h3>
                        <p class="text-sm text-gray-600 mb-2">${shop.category}</p>
                        <div class="flex items-center justify-between">
                            <span class="flex items-center text-sm">
                                <i class="fas fa-star text-yellow-500 mr-1"></i>
                                ${shop.rating} (${shop.reviews})
                            </span>
                            <span class="text-sm text-gray-600">
                                <i class="fas fa-map-marker-alt mr-1"></i>
                                ${shop.distance} km
                            </span>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function loadShopProducts() {
            const container = document.getElementById('shopProducts');
            
            container.innerHTML = products.map(product => `
                <div class="bg-gray-50 rounded-lg p-4 relative hover-lift">
                    ${product.discount > 0 ? `
                        <span class="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold pulse">
                            ${product.discount}% OFF
                        </span>
                    ` : ''}
                    <img src="${product.image}" alt="${product.name}" class="w-full h-32 object-cover rounded-lg mb-3">
                    <h4 class="font-medium text-primary mb-1">${product.name}</h4>
                    <p class="text-sm text-gray-600 mb-2">${product.category} • ${product.unit}</p>
                    <div class="flex items-center mb-2">
                        ${product.discount > 0 ? `
                            <span class="text-lg font-semibold text-primary mr-2">₹${product.price}</span>
                            <span class="text-sm text-gray-400 line-through">₹${product.originalPrice}</span>
                        ` : `
                            <span class="text-lg font-semibold text-primary">₹${product.price}</span>
                        `}
                    </div>
                    <div class="flex items-center mb-3">
                        <div class="flex text-yellow-400 text-sm mr-2">
                            ${Array(5).fill(0).map((_, i) => 
                                `<i class="${i < Math.floor(product.rating) ? 'fas' : 'far'} fa-star text-xs"></i>`
                            ).join('')}
                        </div>
                        <span class="text-xs text-gray-600">(${product.rating})</span>
                    </div>
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-sm ${product.stock <= product.lowStockAlert ? 'text-red-500 font-semibold' : 'text-green-500'}">
                            ${product.stock <= product.lowStockAlert ? 
                                `Only ${product.stock} left!` : 
                                `In Stock (${product.stock})`}
                        </span>
                    </div>
                    <button onclick="addToCart(${product.id})" 
                            class="w-full px-3 py-2 bg-accent-orange text-white rounded-lg hover:bg-orange-600 transition font-medium ${product.stock === 0 ? 'opacity-50 cursor-not-allowed' : ''}"
                            ${product.stock === 0 ? 'disabled' : ''}>
                        ${product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                    </button>
                </div>
            `).join('');
        }

        function loadShopReviews() {
            const container = document.getElementById('shopReviews');
            
            container.innerHTML = reviews.map(review => `
                <div class="border-b border-gray-200 pb-4 last:border-0">
                    <div class="flex items-start space-x-3">
                        <img src="${review.userImage}" alt="${review.user}" class="w-12 h-12 rounded-full">
                        <div class="flex-1">
                            <div class="flex items-center justify-between mb-1">
                                <h4 class="font-medium">${review.user}</h4>
                                <span class="text-sm text-gray-600">${review.date}</span>
                            </div>
                            <div class="flex items-center mb-2">
                                ${Array(5).fill(0).map((_, i) => 
                                    `<i class="${i < review.rating ? 'fas' : 'far'} fa-star text-yellow-500"></i>`
                                ).join('')}
                            </div>
                            <p class="text-gray-700">${review.comment}</p>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function loadOrdersList() {
            const container = document.getElementById('ordersList');
            
            container.innerHTML = orders.map(order => `
                <div class="border border-gray-200 rounded-lg p-4">
                    <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <div>
                            <h4 class="font-medium text-primary">Order ${order.id}</h4>
                            <p class="text-sm text-gray-600">${order.shop} • ${order.date}</p>
                        </div>
                        <span class="px-3 py-1 text-sm rounded-full ${
                            order.status === 'delivered' ? 'bg-green-100 text-green-600' :
                            order.status === 'processing' ? 'bg-blue-100 text-blue-600' :
                            order.status === 'pending' ? 'bg-yellow-100 text-yellow-600' :
                            'bg-red-100 text-red-600'
                        }">
                            ${order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                    </div>
                    <div class="mb-3">
                        <p class="text-sm text-gray-600 mb-1">Items:</p>
                        <p class="text-sm">${order.items.join(', ')}</p>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="font-semibold text-primary">Total: ₹${order.amount}</span>
                        <button class="px-4 py-2 bg-accent-orange text-white rounded-lg hover:bg-orange-600 transition">View Details</button>
                    </div>
                </div>
            `).join('');
        }

        // Initialize the app
        document.addEventListener('DOMContentLoaded', function() {
            loadFeaturedShops();
            loadShopProducts();
            loadShopReviews();
            loadOrdersList();
            updateCartUI();
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', function(event) {
            const userMenu = document.getElementById('userMenu');
            const userMenuButton = event.target.closest('button[onclick="toggleUserMenu()"]');
            
            if (!userMenuButton && !userMenu.contains(event.target)) {
                userMenu.classList.add('hidden');
            }
            
            const cartSidebar = document.getElementById('cartSidebar');
            const cartButton = event.target.closest('button[onclick="showCartSidebar()"]');
            
            if (!cartButton && cartSidebar && !cartSidebar.contains(event.target)) {
                closeCartSidebar();
            }
        });
    
