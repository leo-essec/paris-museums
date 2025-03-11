import { error } from '@sveltejs/kit';
import { museums } from '$lib/data/museums';

export function load({ params }) {
    const id = parseInt(params.id);
    const museum = museums.find(m => m.id === id);
    
    if (!museum) {
        throw error(404, {
            message: 'Museum not found'
        });
    }
    
    return {
        museum
    };
}