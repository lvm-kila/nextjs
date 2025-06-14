diff --git a//dev/null b/pages/index.js
index 0000000000000000000000000000000000000000..32d675a766bc7ed4d219b28d33c03cbe7a68ab02 100644
--- a//dev/null
+++ b/pages/index.js
@@ -0,0 +1,53 @@
+export default function Home() {
+  return (
+    <div>
+      <header>
+        <nav>
+          <ul>
+            <li><a href="#home">Inicio</a></li>
+            <li><a href="#about">Nosotros</a></li>
+            <li><a href="#services">Servicios</a></li>
+            <li><a href="#portfolio">Portafolio</a></li>
+            <li><a href="#contact">Contacto</a></li>
+          </ul>
+        </nav>
+      </header>
+
+      <section id="home">
+        <h1>Agencia de Desarrollo Web</h1>
+        <p>Creando experiencias digitales que potencian tu negocio.</p>
+      </section>
+
+      <section id="about">
+        <h2>Sobre Nosotros</h2>
+        <p>
+          Somos un equipo de profesionales dedicados al desarrollo de
+          sitios y aplicaciones web utilizando las últimas tecnologías.
+        </p>
+      </section>
+
+      <section id="services">
+        <h2>Servicios</h2>
+        <ul>
+          <li>Diseño y Desarrollo Web</li>
+          <li>Aplicaciones Web Personalizadas</li>
+          <li>Optimización y Mantenimiento</li>
+        </ul>
+      </section>
+
+      <section id="portfolio">
+        <h2>Portafolio</h2>
+        <p>Próximamente podrás ver algunos de nuestros proyectos.</p>
+      </section>
+
+      <section id="contact">
+        <h2>Contacto</h2>
+        <p>Ponte en contacto con nosotros para más información.</p>
+      </section>
+
+      <footer>
+        <p>&copy; {new Date().getFullYear()} Agencia de Desarrollo Web</p>
+      </footer>
+    </div>
+  );
+}
