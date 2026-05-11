"use client"

import { motion } from "framer-motion"

export default function Home() {
  return (
    <main style={{padding:"40px", textAlign:"center"}}>
      <motion.h1
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{duration:1}}
        style={{fontSize:"48px", marginBottom:"20px"}}
      >
        Instituto Kamilah Franco
      </motion.h1>

      <p style={{fontSize:"20px", maxWidth:"800px", margin:"0 auto 40px"}}>
        Estrutura emocional feminina e transformação emocional personalizada.
      </p>

      <a
        href="https://wa.me/5546988042216"
        target="_blank"
        style={{
          background:"#7c5f52",
          color:"white",
          padding:"16px 28px",
          borderRadius:"999px",
          display:"inline-block"
        }}
      >
        Agendar Sessão
      </a>
    </main>
  )
}