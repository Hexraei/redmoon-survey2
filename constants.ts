
import type { TshirtDesign, Question } from './types';

export const TSHIRT_DESIGNS: TshirtDesign[] = [
    { id: '1', designName: 'Classic Black Moon', frontImage: 'https://picsum.photos/seed/1/400/500' },
    { id: '2', designName: 'White Moon Phase', frontImage: 'https://picsum.photos/seed/2/400/500' },
    { id: '3', designName: 'Gray Abstract Moon', frontImage: 'https://picsum.photos/seed/3/400/500' },
    { id: '4', designName: 'Navy Crescent', frontImage: 'https://picsum.photos/seed/4/400/500' },
    { id: '5', designName: 'Beige Minimal', frontImage: 'https://picsum.photos/seed/5/400/500' },
    { id: '6', designName: 'Midnight Eclipse', frontImage: 'https://picsum.photos/seed/6/400/500' },
    { id: '7', designName: 'Lunar Wave', frontImage: 'https://picsum.photos/seed/7/400/500' },
    { id: '8', designName: 'Cosmic Dust', frontImage: 'https://picsum.photos/seed/8/400/500' },
    { id: '9', designName: 'Solar Flare', frontImage: 'https://picsum.photos/seed/9/400/500' },
    { id: '10', designName: 'Stellar Night', frontImage: 'https://picsum.photos/seed/10/400/500' },
    { id: '11', designName: 'Aurora Glow', frontImage: 'https://picsum.photos/seed/11/400/500' },
    { id: '12', designName: 'Twilight Shadow', frontImage: 'https://picsum.photos/seed/12/400/500' },
    { id: '13', designName: 'Dawn Breaker', frontImage: 'https://picsum.photos/seed/13/400/500' },
    { id: '14', designName: 'Dusk Horizon', frontImage: 'https://picsum.photos/seed/14/400/500' },
    { id: '15', designName: 'Moonlight Sonata', frontImage: 'https://picsum.photos/seed/15/400/500' }
];

export const QUESTIONS: Question[] = [
    {
        id: 'fit',
        question: 'Which fit do you like?',
        options: ['Oversized', 'Regular', 'Slim', 'Free size']
    },
    {
        id: 'colors',
        question: 'Which colors do you wear most often?',
        options: ['Black / White', 'Bright', 'Light', 'Dark']
    },
    {
        id: 'design',
        question: 'What type of T-shirt designs do you like?',
        options: ['Simple', 'Graphics', 'Text', 'Plain']
    },
    {
        id: 'buyingReasons',
        question: 'What is the biggest reason not to buy T-shirts online?',
        options: ['Price', 'Not sure on size/fit', 'Fabric quality doubts', 'Designs not my vibe', 'Shipping/returns']
    },
    {
        id: 'frequency',
        question: 'How often do you buy T-shirts?',
        options: ['Monthly', 'Every 2–3 months', 'Few times a year', 'Rarely']
    },
    {
        id: 'priorities',
        question: 'What matters most in a T-shirt?',
        options: ['Comfort', 'Strong', 'Cool Design', 'Daily Use']
    },
    {
        id: 'size',
        question: 'What is your usual size?',
        options: ['XS', 'S', 'M', 'L', 'XL', '2XL+']
    },
    {
        id: 'purchaseFactors',
        question: 'When you walk into a store and want to buy a T-shirt, what are the things that you look for?',
        options: [],
        isText: true
    }
];
