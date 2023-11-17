import { motion } from "framer-motion";

interface IProps {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  options?: {
    x?: number;
    bottom?: number;
  };
}

export const Reveal = ({
  children,
  width = "fit-content",
  options,
}: IProps) => {
  return (
    <div style={{ width }}>
      <motion.div
        initial={{
          opacity: 0,
          x: options.x || 0,
          y: options.bottom || 0,
        }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
