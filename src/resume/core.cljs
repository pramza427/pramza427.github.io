(ns resume.core
  (:require
   [reagent.dom :as rdom]
   [re-frame.core :as rf]
   [resume.views :as views]
   ))

(defn get-local-storage [key]
  (.getItem (.-localStorage js/window) key))

(rf/reg-event-db
  ::init-dark-mode
  (fn [db [_]]
    (let [dark? (get-local-storage "dark")]
      (when (= dark? "true")
        (.classList.add (js/document.getElementById "app") "dark")
        (assoc db :dark-mode true)))))

(defn start []
  (rdom/render [views/main-panel]
               (. js/document (getElementById "app"))))

(defn ^:export init []
  (js/setInterval #(rf/dispatch [::inc-time]) 1000)
  (rf/dispatch [::init-dark-mode])
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (start))
