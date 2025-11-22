# Profile Picture Instructions

## How to Add Your Profile Picture

1. **Place your profile picture** in this `public` folder
2. **Name it exactly:** `profile.jpg`
   - Supported formats: `.jpg`, `.jpeg`, `.png`
   - If using PNG, rename the file to `profile.jpg` or update the image path in the components

3. **Recommended size:** 400x400 pixels or larger (square image works best)
4. **File location:** 
   ```
   public/profile.jpg
   ```

## Where the Picture Appears

Your profile picture will automatically appear in:
- **Hero Section** (main landing area) - Circular with green status indicator
- **About Section** - Rounded square format

## Fallback

If no image is found, the portfolio will show your initials "AK" in a styled circle/square.

## Alternative Formats

If your image has a different name or format, you can:
1. Rename it to `profile.jpg` and place in `public/` folder, OR
2. Update the image paths in:
   - `components/Hero.tsx` (line ~30)
   - `components/About.tsx` (line ~30)

Example: If your file is `my-photo.png`, change:
```tsx
src="/profile.jpg"
```
to:
```tsx
src="/my-photo.png"
```

