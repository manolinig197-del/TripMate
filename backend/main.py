
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="TripMate API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "Welcome to TripMate API!"}


@app.get("/health")
def health_check():
    return {"status": "healthy"}

@app.get("/destinations")
def get_destinations():
    return {
        "destinations": [
            
{
    "id": 7,
    "name": "Hyderabad",
    "country": "India",
    "category": "City",
    "price": 12000,
    "image": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f",
    "tag": "City Escape",
    "description": "Explore historic landmarks and vibrant city life."
},
{
    "id": 8,
    "name": "Goa",
    "country": "India",
    "category": "Beach",
    "price": 18000,
    "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
    "tag": "Beach Escape",
    "description": "Relax on beautiful beaches and enjoy coastal adventures."
},
{
    "id": 9,
    "name": "Manali",
    "country": "India",
    "category": "Adventure",
    "price": 25000,
    "image": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
    "tag": "Mountain Retreat",
    "description": "Enjoy mountain views and refreshing Himalayan adventures."
}

        ]
    }
