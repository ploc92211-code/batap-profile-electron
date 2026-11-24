

document.addEventListener('DOMContentLoaded', () => {
    
    //  HIỆU ỨNG CLICK MỞ RỘNG KỸ NĂNG 
    const skillItems = document.querySelectorAll('.skill-item');

    skillItems.forEach(item => {
        item.addEventListener('click', () => {
            // Đóng các mục khác nếu muốn (nếu chỉ muốn mở 1 cái tại một thời điểm)
            // skillItems.forEach(i => { if(i !== item) i.classList.remove('active'); });
            
            // Bật/tắt class active cho mục được click
            item.classList.toggle('active');
        });
    });


    //  TÍCH HỢP API: LẤY CÂU DANH NGÔN TÙY SESSION 
    const quoteTextElement = document.getElementById('quote-text');
    const quoteAuthorElement = document.getElementById('quote-author');
    const btnNewQuote = document.getElementById('btn-new-quote');

    async function fetchRandomQuote() {
        quoteTextElement.innerText = "Đang lấy câu mới...";
        quoteAuthorElement.innerText = "";
        
        try {
            const response = await fetch('https://dummyjson.com/quotes/random');
            const data = await response.json();
            
            quoteTextElement.innerText = `"${data.quote}"`;
            quoteAuthorElement.innerText = `— ${data.author}`;
        } catch (error) {
            quoteTextElement.innerText = '"Hãy kiên trì, thành công sẽ đến với bạn."';
            quoteAuthorElement.innerText = '— Khuyết danh';
        }
    }

   
    fetchRandomQuote();
    
    if (btnNewQuote) {
        btnNewQuote.addEventListener('click', fetchRandomQuote);
    }


    //  XỬ LÝ GỬI FORM LIÊN HỆ 
    const contactForm = document.getElementById('contact-form');
    const responseMsg = document.getElementById('form-response-msg');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); 

            const nameValue = document.getElementById('contact-name').value;
            responseMsg.innerText = `Cảm ơn ${nameValue}! Tin nhắn của bạn đã được gửi thành công.`;
            contactForm.reset();
        });
    }

});