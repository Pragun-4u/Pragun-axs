import { toast } from "react-hot-toast";

const useToast = () => {
  const showToast = (type, message) => {
    if (!message) {
      console.error("A message is required to show a toast.");
      return;
    }

    switch (type) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      default:
        console.warn(
          `Invalid toast type: "${type}". Defaulting to a standard toast.`
        );
        toast(message);
        break;
    }
  };

  return { showToast };
};

export default useToast;
