import { Link, useLocation } from "react-router-dom";
import { Coffee, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface NavbarProps {
  cartItemsCount?: number;
}

const Navbar = ({ cartItemsCount = 0 }: NavbarProps) => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
              <Coffee className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">Cafe Delight</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link to="/">
              <Button 
                variant={isActive("/") ? "default" : "ghost"}
                className="font-medium"
              >
                Home
              </Button>
            </Link>
            <Link to="/menu">
              <Button 
                variant={isActive("/menu") ? "default" : "ghost"}
                className="font-medium"
              >
                Menu
              </Button>
            </Link>
            <Link to="/cart">
              <Button 
                variant={isActive("/cart") ? "default" : "ghost"}
                className="relative font-medium"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart
                {cartItemsCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-accent">
                    {cartItemsCount}
                  </Badge>
                )}
              </Button>
            </Link>
            <Link to="/admin">
              <Button 
                variant={isActive("/admin") ? "default" : "ghost"}
                className="font-medium"
              >
                <User className="h-5 w-5 mr-2" />
                Admin
              </Button>
            </Link>
          </div>
          
          <div className="md:hidden flex items-center gap-2">
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-accent text-xs">
                    {cartItemsCount}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
