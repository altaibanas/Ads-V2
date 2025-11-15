  // تفعيل القائمة المتنقلة
        const btn = document.querySelector("button.mobile-menu-button");
        const menu = document.querySelector(".mobile-menu");

        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
        }); 
        
         
     
          // تفعيل تصفية المشاريع
        const filterButtons = document.querySelectorAll('.bg-gray-200');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // إزالة التفعيل من جميع الأزرار
                filterButtons.forEach(btn => {
                    btn.classList.remove('bg-purple-600', 'text-white');
                    btn.classList.add('bg-gray-200', 'text-gray-800');
                });
                
                // تفعيل الزر المحدد
                button.classList.remove('bg-gray-200', 'text-gray-800');
                button.classList.add('bg-purple-600', 'text-white');
            });
        });

        
         
      
        // تفعيل أزرار إضافة إلى السلة
        const addToCartButtons = document.querySelectorAll('.bg-purple-600');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productCard = this.closest('.product-card');
                const productName = productCard.querySelector('h3').textContent;
                
                // تغيير نص الزر مؤقتًا
                const originalText = this.textContent;
                this.textContent = 'تمت الإضافة!';
                this.classList.remove('bg-purple-600', 'hover:bg-purple-700');
                this.classList.add('bg-green-600');
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.classList.remove('bg-green-600');
                    this.classList.add('bg-purple-600', 'hover:bg-purple-700');
                }, 2000);
            });
        });