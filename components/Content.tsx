import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import shuffle from "lodash.shuffle";

import styles from './Content.module.css'

export const Content = () => {
    const [colors, setColors] = useState(['red', 'blue', 'green', 'black'])

    useEffect(() => {
                setTimeout(() => {
                    const newColors = shuffle(colors)
                    console.log('new', newColors)
                    setColors(() => newColors)
                }, 1000)
    }, [colors])

    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {colors.map(background => (
                    <motion.li
                        className={styles.item}
                        key={background}
                        layoutTransition
                        style={{ background }}
                    />
                ))}
            </ul>
        </div>
    );
};

const initialColors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF"];
