import "./styles.css";
import { PageHome } from "./pages/PageHome";
import { Router } from "./core/Router";

document.addEventListener("DOMContentLoaded", () => {
  const appRootElement = document.querySelector("#app");
  if (!appRootElement) {
    console.error("App root element #app not found!");
    return;
  }

  // Instantiate the router
  const router = new Router("#app");

  router.registerRoute("/", () => new PageHome());
  // router.registerRoute("/photo/:id", (params) => new PhotoDetailPage({ photoId: params.id }));

  // Start the router
  router.start();
});
