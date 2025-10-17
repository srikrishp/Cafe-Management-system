import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import heroImage from "@/assets/hero-coffee.jpg";
import espressoImage from "@/assets/espresso.jpg";
import cappuccinoImage from "@/assets/cappuccino.jpg";
import latteImage from "@/assets/latte.jpg";

const Home = () => {
  const featuredItems = [
    {
      id: 1,
      name: "Classic Espresso",
      description: "Rich and bold espresso shot with perfect crema",
      price: 120,
      image: espressoImage,
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Cappuccino",
      description: "Smooth espresso with steamed milk and foam art",
      price: 180,
      image: cappuccinoImage,
      badge: "Popular"
    },
    {
      id: 3,
      name: "Caffe Latte",
      description: "Creamy latte with perfectly layered milk",
      price: 200,
      image: latteImage,
      badge: "Featured"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-primary-foreground">
            <Badge className="mb-4 bg-accent">Premium Coffee Experience</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to Cafe Delight
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Experience the finest coffee crafted with passion and precision. Every cup tells a story.
            </p>
            <div className="flex gap-4">
              <Link to="/menu">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Explore Menu
                </Button>
              </Link>
              <Link to="/cart">
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                  Order Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Customer Favorites</Badge>
            <h2 className="text-4xl font-bold text-primary mb-4">Featured Coffee</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our most loved coffee selections, handpicked for their exceptional taste and quality
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <Badge className="absolute top-4 right-4 bg-accent">
                    {item.badge}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{item.name}</CardTitle>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-primary">₹{item.price}</span>
                    <Badge variant="outline">Hot</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/menu">
              <Button size="lg" variant="outline" className="font-semibold">
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-6">Why Choose Cafe Delight?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We are passionate about delivering the perfect cup of coffee. From sourcing the finest beans to expert brewing techniques, every detail matters to us.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 rounded-lg bg-card border">
                <div className="text-4xl mb-4">☕</div>
                <h3 className="text-xl font-semibold mb-2">Premium Beans</h3>
                <p className="text-muted-foreground">Carefully selected beans from the best coffee regions</p>
              </div>
              <div className="p-6 rounded-lg bg-card border">
                <div className="text-4xl mb-4">👨‍🍳</div>
                <h3 className="text-xl font-semibold mb-2">Expert Baristas</h3>
                <p className="text-muted-foreground">Skilled craftsmen brewing perfection in every cup</p>
              </div>
              <div className="p-6 rounded-lg bg-card border">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold mb-2">Award Winning</h3>
                <p className="text-muted-foreground">Recognized for excellence in coffee craftsmanship</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Cafe Delight</h3>
              <p className="text-primary-foreground/80">
                Serving happiness, one cup at a time since 2020.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><Link to="/menu" className="hover:text-accent transition-colors">Menu</Link></li>
                <li><Link to="/cart" className="hover:text-accent transition-colors">Orders</Link></li>
                <li><Link to="/" className="hover:text-accent transition-colors">About</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Phone: +91 98765 43210</li>
                <li>Email: hello@cafedelight.com</li>
                <li>Address: Mumbai, India</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hours</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Mon - Fri: 7am - 9pm</li>
                <li>Sat - Sun: 8am - 10pm</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2025 Cafe Delight. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
