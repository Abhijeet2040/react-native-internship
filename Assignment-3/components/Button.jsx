import { Pressable, Text } from "react-native";

const Button = ({ variant = "primary", size = "md" }) => {
  const buttonStyles = {
    primary: `bg-blue-500 `,
    outline: `border `,
    success: `bg-red-500`,
    danger: `bg-green-400`,
  };

  const sizeClasses = {
    sm: `h-10 w-36`,
    md: `h-12 w-56`,
    lg: `h-14 w-72`,
  };

  return (
    <Pressable
      className={`${buttonStyles[variant]} ${sizeClasses[size]} mt-4 justify-center rounded-md`}
    >
      <Text
        className={`text-center text-lg ${
          variant !== "outline" && "text-white"
        }`}
      >
        Button
      </Text>
    </Pressable>
  );
};

export default Button;
