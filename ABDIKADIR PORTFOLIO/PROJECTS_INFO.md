# 📝 Update Your Projects Information

To showcase your 2 projects, update the `components/Projects.tsx` file with your actual project details.

## Steps to Update:

1. **Open** `components/Projects.tsx`

2. **Find the projects array** (around line 7-25)

3. **Update each project with your information:**

```typescript
const projects = [
  {
    title: 'Your Project 1 Name',
    description: 'A brief description of what your project does and what technologies you used.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'], // Your actual tech stack
    github: 'https://github.com/YOUR_USERNAME/project1', // Your GitHub repo URL
    live: 'https://your-project1.vercel.app', // Your Vercel deployment URL
    image: '/api/placeholder/600/400', // Optional: Add project screenshot later
    featured: true,
  },
  {
    title: 'Your Project 2 Name',
    description: 'Description of your second project.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'], // Your actual tech stack
    github: 'https://github.com/YOUR_USERNAME/project2',
    live: 'https://your-project2.vercel.app',
    image: '/api/placeholder/600/400',
    featured: true,
  },
]
```

4. **Update GitHub username** in these files:
   - `components/Hero.tsx` (line ~60)
   - `components/Contact.tsx` (line ~30)
   - `components/Footer.tsx` (line ~25)
   - `components/Projects.tsx` (line ~45)

   Replace `https://github.com/yourusername` with your actual GitHub username.

## Example:

If your GitHub username is `abdikadir-dev` and your projects are:
- Project 1: E-commerce App (https://ecommerce-app.vercel.app)
- Project 2: Task Manager (https://task-manager.vercel.app)

Your update would look like:
```typescript
github: 'https://github.com/abdikadir-dev',
live: 'https://ecommerce-app.vercel.app',
```

## Optional: Add Project Images

Later, you can add actual project screenshots:
1. Create a `public` folder in your project root
2. Add your project images (e.g., `project1.png`, `project2.png`)
3. Update the image path: `image: '/project1.png'`

---

**That's it!** Once you update these, your portfolio will showcase your real projects! 🚀

