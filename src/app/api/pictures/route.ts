// app/api/pictures/route.ts (oder pages/api/pictures.ts)
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const imagesDirectory = path.join(process.cwd(), 'public', 'posts');
        const imageFiles = fs.readdirSync(imagesDirectory);
        const images = imageFiles
            .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
            .map(file => ({
                src: `/posts/${file}`,
                alt: file.replace(/\.[^/.]+$/, ""),
            }));
        
        return Response.json({ images });
    } catch (error) {
        console.error('Fehler beim Laden der Bilder:', error);
        
        // Spezifische Fehlermeldung je nach Error-Typ
        if (error instanceof Error) {
            return Response.json({ 
                images: [], 
                error: `Fehler: ${error.message}` 
            }, { status: 500 });
        }
        
        return Response.json({ images: [] }, { status: 500 });
    }
}