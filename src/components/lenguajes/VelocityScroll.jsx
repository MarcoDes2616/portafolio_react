import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

const VelocityScroll = ({baseVelocity = 100, children}) => {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });
    // FRONT: HTML-CSS-JAVASCRIPT-REACT-NEXT-JQUERY
    // BACKEND: NODE-EXPRESS-JAVA-SPRING-POSTGRES-MYSQL-MONGODB-FIREBASE
    // TECNOLOGÍAS: GIT-GITHUB-POWER BI-
  
    const x = useTransform(baseX, (v) => `${wrap(-20, 100, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="parallax">
            {/* <h3>{title}</h3> */}
            <motion.div className="scroller" style={{ x }}>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
            </motion.div>
        </div>
    );
};

export default VelocityScroll;