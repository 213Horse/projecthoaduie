$(document).ready(function() {
    
    var arrLang = {
        'tr': {
            '1': 'Home',
'2': 'Products',
'3': 'Commerce',
'4': 'About Us',
'5': 'Contact',
'6': 'HOA DUE INNOVATION TECHNOLOGY CO., LTD',
'7': 'VEECO is a brand under Hoa Due. The company specializes in manufacturing and distributing modern, convenient mini handheld fans that meet consumers’ daily needs. With the motto "Compact - Effective - Stylish," VEECO is committed to providing high-quality products with beautiful designs and smart features.',
'8': 'Handheld Fans',
'9': 'Compact - Effective - Stylish',
'10': 'Electronic Products',
'11': 'Modern - Quality - Convenient',
'12': 'Customers',
'13': 'Projects',
'14': 'Fields',
'15': 'Experience',
'16': 'Product services we provide',
'17': 'Main products: handheld fans, high-speed fans, portable foldable fans, desktop fans, outdoor camping fans, and other innovative small household appliances. VEECO products are highly rated for their variety of models, long usage time, superior durability, and quiet operation. Particularly, the mini handheld fan by VEECO is not just a convenient cooling item but also a fashionable accessory suitable for all demographics, from students to office workers or travel enthusiasts.',
'18': 'Strategy',
'19': 'We shape long-term strategies, conduct market research, and optimize business processes to bring sustainable growth and a competitive edge to our customers.',
'20': 'Project Management',
'21': 'Our project management services ensure schedules, budgets, and quality to help customers achieve their goals most efficiently.',
'22': 'Support',
'23': 'Our team of experts is always ready to support customers with technical solutions, quick troubleshooting, and maximum satisfaction.',
'24': 'Growth',
'25': 'We provide advanced technology solutions to support digital transformation, custom software development, and productivity improvement for businesses.',
'26': 'Our Products',
'27': 'VEECO offers mini handheld fans, desktop fans, and portable fans with modern designs,...',
'28': 'Learn More >',
'29': 'Contact',
'30': 'Visit our website or contact us directly for consultation on the products that best suit your needs...',
'31': 'Learn More >',
'32': 'Your Companion',
'33': 'VEECO is a leading brand in personal cooling solutions. With convenience, fashionable designs, and modern technology, we bring products that not only cool but also create a comfortable lifestyle for you.',
'34': 'Effective Cooling Solutions',
'35': 'VEECO provides mini handheld fans with superior performance, long usage time, ensuring efficient cooling under all conditions. The quality of our products has been affirmed through customer satisfaction.',
'36': 'Innovative Design',
'37': 'VEECO fans feature modern designs integrated with advanced technology such as quiet motors, energy efficiency, and multiple wind speeds, offering users an optimal experience.',
'38': 'Customer Satisfaction',
'39': 'VEECO always prioritizes customers, offering high-quality products with reputable warranties and dedicated customer service, ensuring long-term satisfaction.',
'43': 'Featured Products',
'44': 'Mini Handheld Fan with Cooling K56',
'45': 'Mini Handheld Fan with 100 Levels GS5',
'46': 'Mini Handheld Fan with 199 Levels GF02',
'47': 'Need a convenient cooling solution?',
'48': 'Contact us to experience high-quality mini handheld fans by VEECO and resolve all your inquiries.',
'49': 'Contact Now',
'50': 'Pages',
'51': 'Home',
'52': 'About Us',
'53': 'Commerce',
'54': 'Contact',
'55': 'Services',
'56': 'Products',
'57': 'Featured Products',
'58': 'Support Services',
'59': 'VEECO Solutions',
'60': 'News',
'61': 'You can enter your email address to subscribe to our newsletter.',
'62': 'Subscribe',
'201': 'Contact',
'202': 'VEECO FAN',
'203': 'Contact Information',
'204': 'Submit a support request',
'205': 'Fill in the form, and our team will respond to you within 24 hours.',
'206': 'Submit',
'207': 'Frequently Asked Questions',
'208': 'Comprehensive Review and Detailed Answers to Basic Information and Frequently Asked Questions',
'300': 'About Us',
'301': 'Who We Are and How We Provide Solutions?',
'302': 'ARTEIS IT was founded by expert consultants with over 13 years of experience in providing end-to-end solutions in SAP products and application areas.',
'303': 'The Arteis Difference in Innovative Software Solutions',
'304': 'Arteis is a software company that provides innovative software solutions and leads in technology. Founded in 2015 by a group of passionate software engineers and technology enthusiasts, Arteis has quickly established a solid position in the industry and has successfully completed numerous projects.',
'305': 'Customers',
'306': 'Projects',
'307': 'Experience',
'308': 'Superior Services Offered by Our Software Company',
'309': 'Provides fast and reliable software solutions.',
'310': 'Develops customer-focused and innovative projects.',
'311': 'Ensures high efficiency with the latest technologies.',
'312': 'Contact',
'313': 'Rediscover Technology',
'314': 'We lead the constantly evolving technology. We optimize your business processes and provide a competitive advantage. Contact for detailed information or visit our website.',
'315': 'Meet Our Team',
'316': 'The Arteis team consists of passionate professionals dedicated to technology. Discover how we can help you improve your business.',
'400': 'More',
'500': 'Products',
'501': 'Processes and Applications',
'502': 'We offer customized software processes and applications to enhance the productivity and efficiency of your business.',
'601': 'Commerce',
'602': 'Creative and Innovative Solutions',
'603': 'Discover our social projects that take your business one step ahead. Get to know the innovative solutions we’ve developed to make a mark in the digital world.',
'604': 'Unlock Retail Success with Arteis: Your SAP Experts Await!',
'605': 'Empower your retail future with Arteis: SAP retail products specialists driving growth and innovation. Seamlessly integrate, optimize, and excel with our expert team.',
'606': 'Experience the Arteis advantage today',
'607': 'Learn More',
'800': 'Thank you',
'801': 'Your subscription was successful',
'802': 'Ok'






        },
        'en': {
            '1': 'Trang chủ',
            '2': 'Sản phẩm',
            '3': 'Thương mại',
            '4': 'Về chúng tôi',
            '5': 'Liên hệ',
            '6': 'HOA DUE INNOVATION TECHNOLOGY CO.,LTD',
            '7': 'VEECO là một thương hiệu thuộc Hoa Duệ. Doanh nghiệp chuyên sản xuất, phân phối các dòng quạt cầm tay mini hiện đại, tiện dụng và đáp ứng nhu cầu của người tiêu dùng trong cuộc sống hằng ngày. Với phương châm "Nhỏ gọn - Hiệu quả - Thời trang", VEECO luôn cam kết mang đến những sản phẩm chất lượng cao, thiết kế đẹp mắt và tích hợp nhiều tính năng thông minh.',
            '8': 'Quạt cầm tay',
            '9': 'Nhỏ gọn - Hiệu quả - Thời trang',
            '10': 'Sản phẩm điện tử',
            '11': 'Hiện đại - Chất lượng - Tiện ích',
            '12': 'Khách hàng',
            '13': 'Dự án',
            '14': 'Lĩnh vực',
            '15': 'Kinh nghiệm',
            '16': 'Dịch vụ sản phẩm do chúng tôi cung cấp',
            '17': 'Sản phẩm chính: quạt cầm tay, quạt tốc độ cao, quạt gấp di động, quạt để bàn, quạt cắm trại ngoài trời và các thiết bị gia dụng nhỏ sáng tạo khác. Các sản phẩm của VEECO được đánh giá cao nhờ sự đa dạng về mẫu mã, thời gian sử dụng lâu dài, độ bền vượt trội, và khả năng hoạt động êm ái. Đặc biệt, quạt cầm tay mini VEECO không chỉ là vật dụng giải nhiệt tiện lợi mà còn là phụ kiện thời trang, phù hợp với mọi đối tượng từ học sinh, sinh viên cho đến nhân viên văn phòng hay người yêu thích du lịch.',
            '18': 'Chiến lược',
            '19': 'Chúng tôi định hình các chiến lược dài hạn, nghiên cứu thị trường và tối ưu hóa quy trình kinh doanh nhằm mang lại sự tăng trưởng bền vững và lợi thế cạnh tranh cho khách hàng.',
            '20': 'Quản lý dự án',
            '21': 'Dịch vụ quản lý dự án của chúng tôi đảm bảo tiến độ, ngân sách và chất lượng, giúp khách hàng hoàn thành các mục tiêu một cách hiệu quả nhất.',
            '22': 'Hỗ trợ',
            '23': 'Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ khách hàng với các giải pháp kỹ thuật, xử lý sự cố nhanh chóng và đảm bảo sự hài lòng tối đa.',
            '24': 'Tăng trưởng',
            '25': 'Chúng tôi cung cấp các giải pháp công nghệ tiên tiến, hỗ trợ doanh nghiệp chuyển đổi số, phát triển phần mềm tùy chỉnh và cải thiện năng suất.',
            '26': 'Sản phẩm của chúng tôi',
            '27': 'VEECO cung cấp các sản phẩm quạt cầm tay mini, quạt để bàn và quạt di động với thiết kế hiện đại,...',
            '28': 'Tìm hiểu thêm >',
            '29': 'Liên hệ',
            '30': ' Ghé thăm website của chúng tôi hoặc liên hệ trực tiếp để được tư vấn sản phẩm phù hợp với nhu cầu của bạn...',
            '31': 'Tìm hiểu thêm >',
            '32': 'Người bạn đồng hành',
            '33': 'VEECO là thương hiệu hàng đầu về các giải pháp làm mát cá nhân. Với sự tiện dụng, thiết kế thời trang và công nghệ hiện đại, chúng tôi mang đến những sản phẩm không chỉ giải nhiệt mà còn tạo phong cách sống tiện nghi cho bạn.',
            '34': 'Giải pháp làm mát hiệu quả',
            '35': 'VEECO mang đến các sản phẩm quạt cầm tay mini với hiệu năng vượt trội, thời gian sử dụng lâu dài, đảm bảo làm mát hiệu quả trong mọi điều kiện. Chất lượng sản phẩm đã được khẳng định qua sự hài lòng của khách hàng.',
            '36': 'Thiết kế đột phá',
            '37': 'Quạt VEECO sở hữu thiết kế hiện đại, tích hợp công nghệ tiên tiến như động cơ êm ái, tiết kiệm năng lượng và nhiều tốc độ gió, mang lại trải nghiệm tối ưu cho người dùng.',
            '38': 'Hài lòng khách hàng',
            '39': 'VEECO luôn đặt khách hàng làm trung tâm, cung cấp sản phẩm chất lượng cao với chế độ bảo hành uy tín, cùng dịch vụ chăm sóc khách hàng tận tâm, mang đến sự hài lòng lâu dài.',
            '40': '"Thanks to Arteis software solutions, our business processes have accelerated incredibly and productivity has increased. Everyone easily adapted to the user-friendly interface. I definitely recommend it!"',
            '41': '"Your software companys innovative solutions and excellent customer-centric service are truly impressive. I appreciate your continued leadership in the technology field."',
            '42': '"Arteis fully met our business software needs. The technical support team is always helpful and finds quick solutions to problems. We are very satisfied with our collaboration."',
            '43': 'Sản phẩm nổi bật',
            '44': 'Quạt cầm tay Mini kèm làm lạnh K56',
            '45': 'Quạt cầm tay Mini 100 mức độ GS5',
            '46': 'Quạt cầm tay Mini 199 mức độ GF02',
            '47': 'Bạn cần giải pháp làm mát tiện lợi?',
            '48': 'Liên hệ với chúng tôi để trải nghiệm các sản phẩm quạt cầm tay mini VEECO chất lượng cao và giải quyết mọi thắc mắc.',
            '49': 'Liên hệ ngay',
             // footer
            '50': 'Trang',
            '51': 'Trang chủ',
            '52': 'Về chúng tôi',
            '53': 'Thương mại',
            '54': 'Contact',
            '55': 'Dịch vụ',
            '56': 'Sản phẩm',
            '57': 'Sản phẩm nổi bật',
            '58': 'Dịch vụ hỗ trợ',
            '59': 'Giải pháp của Veeco',
            '60': 'Tin tức',
            '61': 'Bạn có thể nhập địa chỉ email của mình để đăng ký nhận bản tin của chúng tôi.',
            '62': 'Đăng ký',
             // footer

                '100': 'Homepage',
                '101': 'Sản phẩm',
                '102': 'Expertise',
                '103': 'Về chúng tôi',
                '104': 'Liên hệ',
                '106': 'Logistics and Financial Applications',
                '107': 'Enhances supply chain efficiency for businesses while optimizing their financial management. These areas are strategically important for businesses and support operational decision-making.',
                '108': 'SAP Hybris E-Commerce',
                '109': 'Improves customer experience with user-friendly interfaces and robust integration capabilities, offering extensive e-commerce solutions to businesses. With its reliable infrastructure, it plays a crucial role in businesses\' digital transformation processes and provides a competitive advantage.',
                '110': 'SAP S/4HANA Conversion',
                '111': 'Refers to the transition of businesses\' old SAP ERP systems to SAP S/4HANA, a more innovative and modern structure. This transformation enables businesses to enhance operational efficiency, optimize business processes, and make faster decisions with real-time data analysis.',
                '112': 'Other Services',
                '113': 'SAP Business Analytics,  SAP Customer  Activity Repository,  Forecast and Replenishment,  SAP Fiori,  SAP ABAP, SAP Workflow.',
                '114': 'Clients',
                '115': 'Projects',
                '116': 'Industry',
                '117': 'Mobile Services',
                '118': 'SAP Mobile Apps',
                '119': 'Includes SAP applications developed for mobile devices, aiming to manage business processes on mobile and facilitate user access.',
                '120': 'Liên hệ',
                '121': 'Industrial Solutions',
                '122': 'IS-A-VMS',
                '123': 'One of SAP\'s industrial solutions, also known as Business Intelligence and Valuable Customer Management Systems. These applications enable businesses to optimize data management and enhance customer relationships.',
                '124': 'Liên hệ',
                '125': 'Want to bring your project to life?',
                '126': 'Get in touch with us! Our experienced team provides innovative and customized software solutions. We\'re here to turn your ideas into reality and take your business to the next level. Let\'s achieve great things together!',
                '127': 'Liên hệ',
                '201': 'Liên hệ',
            '202': 'VEECO FAN',
            '203': 'Thông tin liên hệ',
            '204': 'Sử dụng gửi yêu cầu hỗ trợ',
            '205': 'Hãy điền vào mẫu và nhóm của chúng tôi sẽ phản hồi bạn trong vòng 24 giờ.',
            '206': 'Submit',
            '207': 'Frequently Asked Questions',
            '208': 'Comprehensive Review and Detailed Answers to Basic Information and Frequently Asked Questions',
            '209': 'What are the delivery times for your projects?',
            '210': 'Delivery times vary depending on the size and complexity of the project, but we work diligently to ensure timely delivery.',
            '211': 'What is the main focus of your product or service?',
            '212': 'Our company focuses on developing customized software solutions and digital platforms. We aim to optimize our clients business processes by providing tailored solutions that meet their needs.',
            '213': 'How does your software development process work?',
            '214': 'Our software development process starts with needs analysis and design, followed by development, testing, and end-user feedback. We shape the process based on the feedback we receive from our clients through continuous communication.',
            '215': 'What do your support services include?',
            '216': 'We provide technical support and updates while using our software. Additionally, we offer user training and consultancy services.',
            '217': 'How do you measure customer satisfaction?',
            '218': 'We continuously evaluate customer satisfaction through customer feedback. We also measure customer satisfaction through post-project evaluation meetings and surveys.',
            '219': 'Can you provide information about the technology and infrastructure your company uses?',
            '220': 'We have a strong technical infrastructure and keep up with the latest technologies used in our projects. We offer reliable and scalable solutions using advanced programming languages, frameworks, and database management systems.',
               
            
            
            
                '300': 'Về chúng tôi',
                '301': 'Who We Are and How We Provide Solutions?',
                '302': 'ARTEIS IT was founded by expert consultants with over 13 years of experience in providing end-to-end solutions in SAP products and application areas.',
                '303': 'The Arteis Difference in Innovative Software Solutions',
                '304': 'Arteis is a software company that provides innovative software solutions and leads in technology. Founded in 2015 by a group of passionate software engineers and technology enthusiasts, Arteis has quickly established a solid position in the industry and has successfully completed numerous projects.',
                '305': 'Customers',
                '306': 'Projects',
                '307': 'Experience',
                '308': 'Superior Services Offered by Our Software Company',
                '309': 'Provides fast and reliable software solutions.',
                '310': 'Develops customer-focused and innovative projects.',
                '311': 'Ensures high efficiency with the latest technologies.',
                '312': 'Liên hệ',
                '313': 'Rediscover Technology',
                '314': 'We lead the constantly evolving technology. We optimize your business processes and provide competitive advantage. Liên hệ for detailed information or visit our website.',
                '315': 'Meet Our Team',
                '316': 'The Arteis team consists of passionate professionals dedicated to technology. Discover how we can help you improve your business.',
                 '400': 'Thêm',
            
            




            '500': 'Sản phẩm',
            '501': 'Processes and Applications',
            '502': 'We offer customized software processes and applications to enhance the productivity and efficiency of your business.',



            //sosyal

            '601':'Thương mại',
            '602':'Creative and Innovative Solutions',
            '603':'Discover our social projects that take your business one step ahead. Get to know the innovative solutions we’ve developed to make a mark in the digital world.',
            '604':'Unlock Retail Success with Arteis: Your SAP Experts Await!',
            '605':'Empower your retail future with Arteis: SAP retail products specialists driving growth and innovation. Seamlessly integrate, optimise, and excel with our expert team.',
            '606':'Experience the Arteis advantage today',
            '607':'Learn More',
            '608':"📣 Getir RISE with SAP project is live... Arteis proud to announce that Getir project, for which we took responsibility for Retail processes as a subcontractor of SAP Turkey, within the scope of the RISE with SAP project. One of Turkeys leading and largest ERP Transformation projects went live in recent months and the post-go-live adaptation process has been successfully progressing.The implementation of end-to-end Retail module processes in a short period of 15 months is also an indicator of this success.Arteis would like to sincerely express gratitude to all teammates of hashtag#Getir, hashtag#SAPTurkey, and hashtag#Arteis who contributed to this great work.Thanks to your determination, knowledge, and collaboration.Getir project has made a significant contribution to Turkey's digital transformation with each of its stakeholders.Arteis is fully confident that will ",
            '609':"Karaca & Golive Leave Their Mark with RISE with SAP Project! We are proud to share our success with Karaca in completing the industry's first comprehensive RISE with SAP project. As part of a transformation project initiated to serve Karaca's 2030 vision and growth strategy, which includes brands such as Jumbo, Emsan, and Homend, we have successfully implemented a project using SAP's latest cloud and industry solutions.The project, which includes applications from SAP's retail solution family, logistics solutions, advanced financial solutions, and human resources applications, was completed in 1.5 years thanks to the dedicated efforts of all teams.We want to thank all stakeholders who contributed to the successful completion of this project, including the hashtag#arteis team for their support in retail solutions, the conforcus team for their support on the financial side, and all stakeholders who served as subcontractors. To more projects that leave a mark with Karaca!",
            '610':"🎉 Announcement of a Successfully Completed Project! 🎉We are proud to announce that we, at Arteis, have successfully completed the Zorluteks SAP CAR UDF (Customer Activity Repository Unified Data Foundation) project!Key achievements from the completion of this project include: ✅ Successful attainment of project goals through excellent teamwork ✅ Adherence to high-quality standards and successful test results ✅ Significant advancements in customer data integration and analytics with innovative solutions ✅ Stronger project delivery through powerful collaborationsInnovations brought by our project: 📊 Advanced Data Analytics and Reporting: New analytical tools and enhanced reporting features enable faster and more accurate business decision-making. 🔒 Inventory Optimization: Leveraging UDF’s historical sales data, the system reduces instances of overstocking or understocking by analyzing factors like seasonality, price changes, and campaigns, ensuring optimal inventory levels. 📈 Real-Time Data Processing: Real-time data transfers provide highly accurate sales forecasts by enabling predictions based on up-to-date information. 💯 Customer Satisfaction: By reducing sales losses with accurate forecasting that considers customer needs, the project aims to enhance customer satisfaction. 👥 User-Friendly, Modern, and Intuitive Interface: A modern and intuitive interface design enhances user experience, making it easier and faster for users to navigate the system and quickly access the information they need. 🔄 High Performance and Scalability: The system is optimized to handle large volumes of data and is designed to meet future growth needs.",

            '800': "Thank you",
            '801': "Your subscription was successful",
            '802': 'Ok'









        },
    };+

    












    



    // Dil butonlarına tıklama olaylarını ekleyin
    $('#btn-tr').click(function() {
        setLanguage('tr');
    });

    $('#btn-en').click(function() {
        setLanguage('en');
    });

    // LocalStorage'dan dili al ve uygula
    var lang = JSON.parse(localStorage.getItem('dil')) || 'en'; // Varsayılan dil: İngilizce
    setLanguage(lang);

    function setLanguage(lang) {
        localStorage.setItem('dil', JSON.stringify(lang));
        $('a,h5,p,h1,h2,span,li,button,h3,label').each(function(index, element) {
            var key = $(this).attr('key');
            if (key && arrLang[lang][key]) {
                $(this).text(arrLang[lang][key]); // Loại bỏ toUpperCase()
            } else {
                console.error(`Key ${key} not found in arrLang for language ${lang}`);
            }
        });
    }
    
    
});
