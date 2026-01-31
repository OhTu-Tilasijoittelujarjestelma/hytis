import { X } from "lucide-react";
import { motion } from "motion/react";
import "./RoomDetails.css";

function RoomDetails({ handleClose }: { handleClose: () => void }) {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "100vw" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="room-details"
    >
      <X className="close-room-details" onClick={handleClose} />
    </motion.div>
  );
}

export default RoomDetails;
