import React, { useEffect, useRef } from "react";

const productos = [
    { id: 1, nombre: "Kit transmisión", precio: "$45.000", img: "/repuestos/kit.png" },
    { id: 2, nombre: "Pastillas freno", precio: "$12.000", img: "/repuestos/freno.png" },
    { id: 3, nombre: "Aceite Motul", precio: "$18.000", img: "/repuestos/aceite.png" },
    { id: 4, nombre: "Batería YTX7", precio: "$35.000", img: "/repuestos/bateria.png" },
    { id: 5, nombre: "Filtro aire", precio: "$9.000", img: "/repuestos/filtro.png" },
    { id: 6, nombre: "Cubierta trasera", precio: "$70.000", img: "/repuestos/cubierta.png" },
];

export default function Repuestos() {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        let scrollAmount = 0;

        const slide = setInterval(() => {
            if (!slider) return;
            scrollAmount += 320;

            if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
                scrollAmount = 0;
            }

            slider.scrollTo({
                left: scrollAmount,
                behavior: "smooth"
            });
        }, 3000);

        return () => clearInterval(slide);
    }, []);

    return (
        <section id="repuestos" style={styles.section}>
            <h2 style={styles.title}>Repuestos</h2>

            <div ref={sliderRef} style={styles.slider}>
                {productos.map(prod => (
                    <div key={prod.id} style={styles.card}>
                        <img src={prod.img} style={styles.img} />
                        <h3>{prod.nombre}</h3>
                        <p style={styles.price}>{prod.precio}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

const styles = {
    section: {
        height: "100vh",
        paddingTop: 120,
        background: "#060b1a",
        color: "white",
        textAlign: "center",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },

    title: {
        fontSize: 42,
        marginBottom: 50,
        color: "#FFD400"
    },

    slider: {
        display: "flex",
        gap: 30,
        overflowX:"auto",
        padding: "0 40px",
        width: "100%",
        maxWidth: 1200,
        justifyContent: "flex-start"
    },

    card: {
        minWidth: 280,
        background: "#0b1328",
        borderRadius: 18,
        padding: 20,
        boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
        transition: "0.3s"
    },

    img: {
        width: "100%",
        height: 180,
        objectFit: "contain",
        marginBottom: 10
    },

    price: {
        color: "#0A84FF",
        fontSize: 22,
        fontWeight: "bold"
    }
};