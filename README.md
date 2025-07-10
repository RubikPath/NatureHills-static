# Nature Hills Farmhouse Website

A professional, responsive static website for a farmhouse business offering staycation services, garden experiences, and farm-fresh meals.

## 🌿 Features

- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Nature-Themed Design**: Soft colors and relaxing visuals that reflect the farm experience
- **Bootstrap Integration**: Professional styling with Bootstrap 5.3.0
- **Interactive Gallery**: Photo gallery with lightbox functionality and filtering
- **Contact Forms**: Booking inquiry form with validation
- **Google Maps Integration**: Embedded map for easy location finding
- **Menu Display**: Complete farm-to-table menu with pricing
- **Social Media Ready**: Placeholder links for Instagram and WhatsApp

## 📁 File Structure

```
farmhouse-website/
├── index.html          # Homepage
├── about.html           # About Us page with menu
├── gallery.html         # Photo gallery with lightbox
├── contact.html         # Contact page with forms and map
├── css/
│   └── style.css       # Custom CSS with nature theme
├── js/
│   └── main.js         # JavaScript functionality
├── images/
│   ├── farmhouse-exterior.jpg
│   ├── farmhouse-white.jpg
│   ├── farmhouse-bedroom.jpg
│   └── farmhouse-living.jpg
└── README.md           # This file
```

## 🚀 Quick Start

### Option 1: Simple File Hosting
1. Upload all files to your web hosting provider
2. Ensure the folder structure is maintained
3. Access your website via your domain

### Option 2: Local Testing
1. Open a terminal in the website folder
2. Run: `python3 -m http.server 8000`
3. Open browser to `http://localhost:8000`

## 🛠 Customization Guide

### 1. Update Contact Information
Edit `contact.html` and replace placeholder information:
- **Address**: Line 67-69
- **Phone Numbers**: Lines 72-74
- **Email Addresses**: Lines 79-81

### 2. Replace Images
- Add your farmhouse photos to the `images/` folder
- Update image paths in HTML files
- Recommended image sizes:
  - Hero background: 1920x1080px
  - Gallery images: 800x600px minimum
  - About page images: 600x400px

### 3. Update Google Maps
In `contact.html`, line 156, replace the iframe src with your location:
```html
<iframe src="https://www.google.com/maps/embed?pb=YOUR_LOCATION_CODE"></iframe>
```

### 4. Setup Google Forms
1. Create a Google Form for bookings
2. Get the embed code
3. Replace the iframe in `contact.html` line 185

### 5. Add Social Media Links
Update social media links in the footer of all pages:
- Instagram: Replace `#` with your Instagram URL
- WhatsApp: Replace `#` with `https://wa.me/YOUR_PHONE_NUMBER`

### 6. Customize Colors
Edit `css/style.css` and modify the CSS variables at the top:
```css
:root {
    --primary-green: #6B8E23;
    --secondary-green: #8FBC8F;
    /* Add your custom colors */
}
```

## 📱 Mobile Responsiveness

The website is fully responsive and includes:
- Mobile-friendly navigation menu
- Responsive image galleries
- Touch-friendly buttons and forms
- Optimized layouts for tablets and phones

## 🔧 Technical Details

### Dependencies
- **Bootstrap 5.3.0**: CSS framework
- **Font Awesome 6.4.0**: Icons
- **Google Fonts**: Playfair Display & Open Sans
- **Lightbox2**: Gallery lightbox functionality

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

### Performance Features
- Optimized images
- Minimal JavaScript
- Clean CSS structure
- Fast loading times

## 🌐 Deployment Options

### 1. Traditional Web Hosting
Upload files via FTP to providers like:
- Bluehost
- SiteGround
- GoDaddy
- HostGator

### 2. Free Static Hosting
Deploy to free platforms:
- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **GitHub Pages**: Free hosting with GitHub
- **Firebase Hosting**: Google's hosting platform

### 3. Content Delivery Networks (CDN)
For better performance:
- Cloudflare
- AWS CloudFront
- Azure CDN

## 📋 Pre-Deployment Checklist

- [ ] Replace all placeholder images with actual farmhouse photos
- [ ] Update contact information (address, phone, email)
- [ ] Set up Google Maps with correct location
- [ ] Create and embed Google Forms for bookings
- [ ] Add real social media links
- [ ] Test all forms and functionality
- [ ] Optimize images for web (compress if needed)
- [ ] Add favicon.ico file
- [ ] Set up Google Analytics (optional)

## 🎨 Design Features

### Color Palette
- **Primary Green**: #6B8E23 (Olive Green)
- **Secondary Green**: #8FBC8F (Dark Sea Green)
- **Accent Green**: #9ACD32 (Yellow Green)
- **Soft Sage**: #C4D5C0 (Light Green)
- **Warm Beige**: #F5F5DC (Background)

### Typography
- **Headings**: Playfair Display (Serif)
- **Body Text**: Open Sans (Sans-serif)

### Interactive Elements
- Hover effects on buttons and cards
- Smooth scrolling navigation
- Gallery filtering system
- Form validation
- Back-to-top button

## 🔒 Security Considerations

- All external resources loaded via HTTPS
- Form validation to prevent spam
- No sensitive data stored in frontend code
- Safe external links (target="_blank" with rel attributes)

## 📞 Support

For technical support or customization requests:
1. Check this README for common solutions
2. Validate HTML/CSS using online validators
3. Test in multiple browsers
4. Check browser console for JavaScript errors

## 📄 License

This website template is provided as-is for the farmhouse business. Feel free to modify and customize according to your needs.

---

**Built with ❤️ for Nature Hills Farmhouse**

*Last updated: December 2025*

