# Quick Guide: Adding Multiple Screenshots

## ✅ Solutions Implemented

### 1. **Confidential Projects - GitHub Link Fixed**
- ✅ For confidential projects, the "View Code" button is now replaced with **"Contact for Demo"**
- ✅ This prevents exposing source code while still allowing interested parties to reach out
- ✅ The button links to your contact section (`#contact`)

### 2. **Multiple Screenshots Support**
- ✅ Each project now supports **multiple screenshots** with a carousel
- ✅ Hover over the image to see navigation arrows
- ✅ Click the dots at the bottom to jump to specific images
- ✅ Image counter shows "1 / 3" format

## 📸 Where Screenshots Are Displayed

Screenshots are displayed in the **top section of each project card**:
- Located in the header area (colored gradient background)
- Shows as a carousel when you have multiple images
- Falls back to an icon if no images are found

## 📝 How to Name Your Screenshots

### Naming Convention:
```
project-name-1.jpg
project-name-2.jpg
project-name-3.jpg
```

### Examples:
- **Property Management System:**
  - `property-management-1.jpg`
  - `property-management-2.jpg`
  - `property-management-3.jpg`

- **SARMS System:**
  - `sarms-system-1.jpg`
  - `sarms-system-2.jpg`
  - `sarms-system-3.jpg`

- **Blockchain Tender System:**
  - `blockchain-tender-1.jpg`
  - `blockchain-tender-2.jpg`
  - `blockchain-tender-3.jpg`

### Important Rules:
1. ✅ Use **hyphens** (not spaces or underscores)
2. ✅ Use **numbers** (1, 2, 3, etc.)
3. ✅ Start from **1** (not 0)
4. ✅ Use **same base name** for all screenshots of one project
5. ✅ Use **.jpg** or **.png** extension

## 🎯 How Many Screenshots Should You Add?

### Recommended: **3-5 screenshots per project**

### Suggested Screenshots:

1. **Main Dashboard/Homepage** (Required)
   - Shows the overall interface and layout
   - First impression of your project

2. **Key Feature View** (Recommended)
   - Highlights a major functionality
   - Shows what makes your project special

3. **Detail/Profile View** (Recommended)
   - Shows detailed information display
   - Demonstrates data handling

4. **Settings/Admin Panel** (If applicable)
   - Shows administrative features
   - Demonstrates role-based access

5. **Mobile/Responsive View** (Optional)
   - Shows mobile compatibility
   - Demonstrates responsive design

## 📁 Where to Save Screenshots

Save all screenshots in:
```
public/projects/
```

Full path example:
```
public/projects/property-management-1.jpg
public/projects/property-management-2.jpg
public/projects/property-management-3.jpg
```

## 🎨 Screenshot Tips

### For Confidential Projects:
- ✅ Blur sensitive data (names, emails, amounts)
- ✅ Show UI/UX design clearly
- ✅ Use placeholder data
- ✅ Focus on features, not data

### For Academic Projects:
- ✅ Show system architecture diagrams
- ✅ Display database schema (anonymized)
- ✅ Show key features in action
- ✅ Include UI/UX demonstrations

### General Tips:
- **Size**: 1200x800px or larger
- **Format**: JPG (smaller file size) or PNG (better quality)
- **Aspect Ratio**: 3:2 or 16:9
- **Quality**: High resolution for best display
- **Consistency**: Use similar styling across all screenshots

## 🔄 How the Carousel Works

1. **Automatic Display**: All images with the correct naming are automatically included
2. **Navigation**: 
   - Hover over image to see left/right arrows
   - Click dots at bottom to jump to specific image
   - Shows image counter (e.g., "2 / 5")
3. **Fallback**: If images don't load, shows project icon instead

## ✅ Checklist Before Adding Screenshots

- [ ] Screenshots are sanitized (for confidential projects)
- [ ] Named correctly: `project-name-1.jpg`, `project-name-2.jpg`, etc.
- [ ] Saved in `public/projects/` folder
- [ ] High quality (1200x800px or larger)
- [ ] Shows key features and UI/UX
- [ ] No sensitive data visible (for confidential projects)

## 🚀 Quick Start

1. Take 3-5 screenshots of your project
2. Sanitize them (blur sensitive data if needed)
3. Name them: `project-name-1.jpg`, `project-name-2.jpg`, etc.
4. Save in `public/projects/` folder
5. Done! They'll automatically appear in the carousel

## 💡 Example Workflow

```
1. Take screenshot of dashboard → Save as: property-management-1.jpg
2. Take screenshot of feature → Save as: property-management-2.jpg
3. Take screenshot of detail view → Save as: property-management-3.jpg
4. Blur sensitive data in all images
5. Save all in public/projects/ folder
6. Deploy - carousel will automatically work!
```

---

**Need help?** Check `CONFIDENTIAL_PROJECTS_GUIDE.md` for detailed sanitization instructions.



