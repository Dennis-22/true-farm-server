"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BenefitsData = exports.ProductsData = void 0;
const ProductsData = [
    {
        id: '1',
        category: 'fruit',
        name: 'Banana',
        image: 'https://i.imgur.com/CPg7c6i.jpg',
        price: 5
    },
    {
        id: '3',
        category: 'fruit',
        name: 'Pineapple',
        image: 'https://i.imgur.com/oXc3oI2.jpg',
        price: 15
    },
    {
        id: '5',
        category: 'fruit',
        name: 'Pawpaw',
        image: 'https://i.imgur.com/x1k91zp.jpg',
        price: 6
    },
    {
        id: '7',
        category: 'fruit',
        name: 'Apple',
        image: 'https://i.imgur.com/79HRcD6.jpg',
        price: 17
    },
    {
        id: '2',
        category: 'fruit',
        name: 'Orange',
        image: 'https://i.imgur.com/fiYE2CL.jpg',
        price: 7
    },
    {
        id: '9',
        category: 'vegetable',
        name: 'Onion',
        image: 'https://i.imgur.com/gbi0ujc.jpg',
        price: 10
    },
    {
        id: '12',
        category: 'vegetable',
        name: 'Tomatoes',
        image: 'https://i.imgur.com/ZkvtFkP.jpg',
        price: 15
    },
    {
        id: '4',
        category: 'fruit',
        name: 'Strawberry',
        image: 'https://i.imgur.com/PgVHn5m.jpg',
        price: 12
    },
    {
        id: '6',
        category: 'fruit',
        name: 'Watermelon',
        image: 'https://i.imgur.com/d5S1rdL.jpg',
        price: 11
    },
    {
        id: '8',
        category: 'fruit',
        name: 'Grapes',
        image: 'https://i.imgur.com/hTT09hJ.jpg',
        price: 15
    },
    {
        id: '10',
        category: 'vegetable',
        name: 'Carrots',
        image: 'https://i.imgur.com/Ac6y7Ts.jpg',
        price: 8
    },
    {
        id: '11',
        category: 'vegetable',
        name: 'Letuce',
        image: 'https://i.imgur.com/fjKZic5.jpg',
        price: 13
    },
    {
        id: '14',
        category: 'vegetable',
        name: 'Almonds',
        image: 'https://i.imgur.com/12b1a00.jpg',
        price: 16
    },
    {
        id: '15',
        category: 'vegetable',
        name: 'Green Pea',
        image: 'https://i.imgur.com/wyxJUpB.jpg',
        price: 3
    },
    {
        id: '16',
        category: 'vegetable',
        name: 'Spinach',
        image: 'https://i.imgur.com/1NoKF2b.jpg',
        price: 16
    },
];
exports.ProductsData = ProductsData;
const BenefitsData = [
    {
        productId: '1',
        name: 'Banana',
        benefits: [
            'Rich in nutrients.',
            'May improve blood sugar levels.',
            'May support digestive health.',
            'May aid weight loss.',
            'May support heart health.',
        ]
    },
    {
        name: 'Pineapple',
        productId: '1',
        benefits: [
            'Loaded with nutrients.',
            'Contains disease-fighting antioxidants.',
            'May reduce your risk of cancer.',
            'May boost immunity and suppress inflammation.',
            'May ease symptoms of arthritis.',
        ]
    },
    {
        name: 'Pawpaw',
        productId: '5',
        benefits: [
            'Delicious and Loaded With Nutrients.',
            'Has Powerful Antioxidant Effects.',
            'Has Anticancer Properties.',
            'May Improve Digestion.',
            'May Fight Inflammation.',
        ]
    },
    {
        name: 'Apple',
        productId: '7',
        benefits: [
            'May Lower High Cholesterol and Blood Pressure.',
            'Can Support a Healthy Immune System.',
            'The Antioxidants in Apples May Play a Role in Cancer Prevention.',
            'Apples Are a Diabetes-Friendly Fruit.',
            'May promote gut health.',
        ]
    },
    {
        name: 'Orange',
        productId: '2',
        benefits: [
            'Protects your cells from damage.',
            'Helps your body make collagen, a protein that heals wounds and gives you smoother skin.',
            'Makes it easier to absorb iron to fight anemia.',
            'Boosts your immune system.',
            'Keeps blood pressure under check.',
        ]
    },
    {
        productId: '9',
        name: 'Onion',
        benefits: [
            'May Benefit Heart Health.',
            'Contain Cancer-Fighting Compounds.',
            'Help Control Blood Sugar.',
            'May Boost Bone Density.',
            'Have Antibacterial Properties.',
        ]
    },
    {
        productId: '12',
        name: 'Tomatoes',
        benefits: [
            'Help Prevent Cancer.',
            'Regulate Blood Pressure.',
            'Aid Weight Loss.',
            'Improve Skin And Hair Health.',
            'Good During Pregnancy.',
        ]
    },
    {
        productId: '4',
        name: 'Strawberry',
        benefits: [
            'Give your immunity a boost.',
            'Maintain your healthy vision.',
            "Improve skin’s resilience.",
            'Lower your cholesterol.',
            'Reduce pesky inflammation.',
        ]
    },
    {
        productId: '6',
        name: 'Watermelon',
        benefits: [
            'Helps you stay hydrated.',
            'May reduce inflammation and oxidative stress.',
            'May help prevent macular degeneration.',
            'May relieve muscle soreness.',
            'May aid skin health.',
        ]
    },
    {
        productId: '8',
        name: 'Grapes',
        benefits: [
            'Prevents cancer.',
            'Lowers blood pressure.',
            'Reduces high cholesterol.',
            'Protects against diabetes.',
            'Improves bone health.',
        ]
    },
    {
        productId: '10',
        name: 'Carrots',
        benefits: [
            'Rich source of dietary carotenoids.',
            'May support cholesterol balance and heart health.',
            'May help with weight loss goals.',
            'May reduce the risk of cancer.',
            'May support gut health.',
        ]
    },
    {
        productId: '11',
        name: 'Letuce',
        benefits: [
            'Improves Vision.',
            'Improves Sleep.',
            'May Fight Inflammation.',
            'May Aid Weight Loss.',
            'May Promote Brain Health.',
        ]
    },
    {
        productId: '14',
        name: 'Almonds',
        benefits: [
            'Reduce Cholesterol.',
            'Good for Your Heart.',
            'Regulate Blood Sugar.',
            'Helps control Blood pressure levels.',
            'Have High Vitamin.',
        ]
    },
    {
        productId: '15',
        name: 'Green Pea',
        benefits: [
            'Good Source of Iron.',
            'Good for eye health.',
            'Good for the heart.',
            'Good for skin.',
            "Good for Men's Health.",
        ]
    },
    {
        productId: '16',
        name: 'Spinach',
        benefits: [
            'Boosts Hydration.',
            'Curbs Appetite.',
            'Helps Prevent Osteoporosis.',
            'Cuts Risk of Iron Deficiency Anemia.',
            'Assists Baby Development.',
        ]
    },
];
exports.BenefitsData = BenefitsData;
