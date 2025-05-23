import { defineConfig } from 'vite';

export default defineConfig({
    root: '.', // Assuming your src/index.html is at root
    build: {
        outDir: 'docs',
        rollupOptions: {
            input: {
                main: 'index.html',
                projects: 'projects.html',
                krauss: 'krauss_approved.html',
                projectDetails: 'project_details.html'
            }
        }
    }
});
