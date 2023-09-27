(ns resume.core
  (:require
   [reagent.dom :as rdom]
   [re-frame.core :as rf]
   [resume.views :as views]
   ))

(defn ^:dev/after-load mount-root []
  (rf/clear-subscription-cache!)
  (let [root-el (.getElementById js/document "app")]
    (rdom/unmount-component-at-node root-el)
    (rdom/render [views/main-panel] root-el)))

(defn init []
  (mount-root))
