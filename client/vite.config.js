import { defineConfig } from 'vite'
import path from 'path';

export default defineConfig({
    root: 'src/',
    rollUpOptions: {
        input: {
           index: path.resolve(__dirname, 'src/index.html'),
           comments: path.resolve(__dirname, 'src/pages/comments/comments.html'),
           contact: path.resolve(__dirname, 'src/pages/contact/contact.html'),
           play: path.resolve(__dirname, 'src/pages/projects/projects.html'),
        }
    },
    outDir: 'dist',
})
