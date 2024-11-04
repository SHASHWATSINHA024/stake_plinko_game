import { useNavigate } from "react-router-dom";
import { Button } from "./ui/Button";
export const Quotes = () => {
  const navigate = useNavigate();
  return (
    <div className="flex mx-16 flex-col justify-center pb-10">
        <h1 className="text-6xl font-bold">gamble more!</h1>
        
        <Button className="hover:bg-green-600" onClick={() => navigate("/game")}>gamble!</Button>
        </div>
  )
}

