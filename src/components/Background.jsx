import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { polygonPathName, loadPolygonPath } from "tsparticles-path-polygon";

const Background = () => {

    const particlesInit = useCallback(async (engine) => {
        loadPolygonPath(engine);
    }, []);

    return (
        <div>
            <Particles
                options={{
                    fpsLimit: 60,
                    particles: {
                        color: {
                            value: "#FFEB3B",
                            animation: {
                                enable: true,
                                speed: 10
                            }
                        },
                        move: {
                            attract: {
                                enable: true,
                                rotate: {
                                    distance: 100,
                                    x: 2000,
                                    y: 2000
                                }
                            },
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "destroy"
                            },
                            path: {
                                clamp: false,
                                enable: true,
                                delay: {
                                    value: 0
                                },
                                generator: polygonPathName,
                                options: {
                                    sides: 6,
                                    turnSteps: 30,
                                    angle: 30
                                }
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                            trail: {
                                fillColor: "#455A64",
                                length: 20,
                                enable: true
                            }
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            value: 0
                        },
                        opacity: {
                            value: 1
                        },
                        shape: {
                            type: "circle"
                        },
                        size: {
                            value: 2
                        }
                    },
                    background: {
                        color: "#fff"
                    },
                    fullScreen: {
                        zIndex: -1
                    },
                    detectRetina: true,
                    emitters: {
                        direction: "none",
                        rate: {
                            quantity: 1,
                            delay: 0.25
                        },
                        size: {
                            width: 0,
                            height: 0
                        },
                        position: {
                            x: 50,
                            y: 0
                        }
                    }
                }}
                init={particlesInit}
            />
        </div>
    );
};

export default Background;