import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import { toast } from "sonner";
import espressoImage from "@/assets/espresso.jpg";
import cappuccinoImage from "@/assets/cappuccino.jpg";
import latteImage from "@/assets/latte.jpg";
import mochaImage from "@/assets/mocha.jpg";
import coldBrewImage from "@/assets/cold-brew.jpg";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  type: "Hot" | "Cold";
  image: string;
}

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState<number[]>([]);

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Classic Espresso",
      description: "Rich and bold espresso shot with perfect crema",
      price: 120,
      category: "Espresso",
      type: "Hot",
      image: espressoImage
    },
    {
      id: 2,
      name: "Double Espresso",
      description: "Double shot of our signature espresso",
      price: 150,
      category: "Espresso",
      type: "Hot",
      image: espressoImage
    },
    {
      id: 3,
      name: "Cappuccino",
      description: "Smooth espresso with steamed milk and foam art",
      price: 180,
      category: "Milk-based",
      type: "Hot",
      image: cappuccinoImage
    },
    {
      id: 4,
      name: "Caffe Latte",
      description: "Creamy latte with perfectly layered milk",
      price: 200,
      category: "Milk-based",
      type: "Hot",
      image: latteImage
    },
    {
      id: 5,
      name: "Mocha",
      description: "Rich chocolate blended with espresso and milk",
      price: 220,
      category: "Milk-based",
      type: "Hot",
      image: mochaImage
    },
    {
      id: 6,
      name: "Cold Brew",
      description: "Smooth, refreshing cold-steeped coffee",
      price: 200,
      category: "Cold Coffee",
      type: "Cold",
      image: coldBrewImage
    },
    {
      id: 7,
      name: "Iced Latte",
      description: "Chilled latte with ice and milk",
      price: 210,
      category: "Cold Coffee",
      type: "Cold",
      image: latteImage
    },
    {
      id: 8,
      name: "Iced Mocha",
      description: "Refreshing chocolate coffee on ice",
      price: 230,
      category: "Cold Coffee",
      type: "Cold",
      image: mochaImage
    }
  ];

  const handleAddToCart = (item: MenuItem) => {
    setCartItems([...cartItems, item.id]);
    toast.success(`${item.name} added to cart!`, {
      description: `₹${item.price}`
    });
  };

  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filterByType = (items: MenuItem[], type?: "Hot" | "Cold") => {
    if (!type) return items;
    return items.filter(item => item.type === type);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartItemsCount={cartItems.length} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">Our Menu</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated selection of premium coffees, all prices in Indian Rupees (₹)
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for coffee..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
          </div>
        </div>

        {/* Tabs for filtering */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
            <TabsTrigger value="all">All Coffee</TabsTrigger>
            <TabsTrigger value="hot">Hot</TabsTrigger>
            <TabsTrigger value="cold">Cold</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-3 right-3 bg-accent">
                      {item.type}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{item.name}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">₹{item.price}</span>
                      <Badge variant="outline">{item.category}</Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full" 
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hot" className="mt-8">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filterByType(filteredItems, "Hot").map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-3 right-3 bg-accent">
                      {item.type}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{item.name}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">₹{item.price}</span>
                      <Badge variant="outline">{item.category}</Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full" 
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cold" className="mt-8">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filterByType(filteredItems, "Cold").map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-3 right-3 bg-accent">
                      {item.type}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{item.name}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">₹{item.price}</span>
                      <Badge variant="outline">{item.category}</Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full" 
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Menu;
