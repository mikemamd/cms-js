(function($) {
  'use strict';

  $(document).ready(function() {

    var controllerFilters = function () {
      /* PRUDCTOS ESTAPA 1 */
      var etapa1 = {
        cereales: {
          name: 'none',
          class: 'none',
          distribution: {
            plataform1: {
              title: 'Cereales Avena y Arroz',
              prods: [
                {name: 'Arroz', src_image: '/sites/default/files/custom-files/cereales-arroz_0_0.png', alt: 'donde comprar Cereal, donde comprar Cereal para bebes', url: '/6-a-12-meses/mi-primer-cereal-arroz-300-g'},
                {name: 'Avena', src_image: '/sites/default/files/custom-files/cereales-avena_0_0.png', alt: 'donde comprar Cereal, donde comprar Cereal para bebes', url: '/6-a-12-meses/mi-primer-cereal-avena-300-g'},
              ]
            }
          }
        },
        papillaCosecha: {
          name: 'Cosecha Natural',
          class: 'cosecha',
          distribution: {
            plataform1: {
              title: 'Papillas Cosecha Natural Fruta',
              prods: [
                {name: 'Manzana', src_image: '/sites/default/files/custom-files/e1_cosecha_natural_fruta_mx_etiqueta_manzana_71g_120919.png', alt: 'donde comprar papillas, donde comprar papillas para bebes', url: '/producto/cosecha-natural-manzana-papilla-71g-x12'},
                {name: 'Pera', src_image: '/sites/default/files/custom-files/e1_cosecha_natural_fruta_etiqueta_pera_71g_120919.png', alt: 'donde comprar papillas, donde comprar papillas para bebes', url: '/producto/cosecha-natural-pera-papilla-71g-x12'},
                {name: 'Mango', src_image: '/sites/default/files/custom-files/e1_cosecha_natural_fruta_mx_etiqueta_mango_71g_120919.png', alt: 'donde comprar papillas, donde comprar papillas para bebes', url: '/producto/cosecha-natural-mango-papilla-71g-x12'},
                {name: 'Durazno', src_image: '/sites/default/files/custom-files/e1_cosecha_natural_fruta_mx_etiqueta_durazno_71g_120919.png', alt: 'donde comprar papillas, donde comprar papillas para bebes', url: '/producto/cosecha-natural-durazno-papilla-71g-x12'},
                {name: 'Ciruela Pasa', src_image: '/sites/default/files/custom-files/e1_cosecha_natural_fruta_mx_etiqueta_ciruelapasa_71g_120919.png', alt: 'donde comprar papillas, donde comprar papillas para bebes', url: '/producto/cosecha-natural-ciruela-pasa-papilla-71g-x12'},
                {name: 'Plátano', src_image: '/sites/default/files/custom-files/e1_cosecha_natural_fruta_mx_etiqueta_platano_71g_120919.png', alt: 'donde comprar papillas, donde comprar papillas para bebes', url: '/producto/cosecha-natural-platano-papilla-71g-x12'},
              ]
            },
            plataform2: {
              title: 'Papillas Cosecha Natural Vegetales',
              prods: [
                {name: 'Zanahoria', src_image: '/sites/default/files/custom-files/e1_cosecha_natural_vegetales_mx_etiqueta_zanahoria_71g_120919.png', alt: 'donde comprar papillas, donde comprar papillas para bebes', url: '/producto/mi-primera-cucharadita/cosecha-natural-zanahoria-papilla-71g-x12'},
                {name: 'Chayote', src_image: '/sites/default/files/custom-files/e1_cosecha_natural_vegetales_mx_etiqueta_chayote_71g_120919.png', alt: 'donde comprar papillas, donde comprar papillas para bebes', url: '/producto/mi-primera-cucharadita/cosecha-natural-chayote-papilla-71g-x12'},
                {name: 'Chícharo', src_image: '/sites/default/files/custom-files/e1_cosecha_natural_vegetales_mx_etiqueta_chicharo_71g_120919.png', alt: 'donde comprar papillas, donde comprar papillas para bebes', url: '/producto/mi-primera-cucharadita/cosecha-natural-chicharo-papilla-71g-x12'},
              ]
            }
          }
        },
        bebidas: {
          name: 'Toque de Fruta',
          class: 'toquefruta',
          distribution: {
            plataform1: {
              title: 'Bebidas Hidratantes Toque de Fruta',
              prods: [
                {name: 'Manzana', src_image: '/sites/default/files/custom-files/e1_bebidas_toque_fruta_agua_manzana_725x418.png', alt: 'donde comprar Bebidas Hidratantes, donde comprar Bebidas Hidratantes para bebes', url: '/producto/mi-primera-cucharadita/toque-de-fruta-manzana-bebida-hidratante-118ml-x12'},
                {name: 'Pera', src_image: '/sites/default/files/custom-files/e1_bebidas_toque_fruta_pera_725x418_0.png', alt: 'donde comprar Bebidas Hidratantes, donde comprar Bebidas Hidratantes para bebes', url: '/producto/mi-primera-cucharadita/toque-de-fruta-pera-bebida-hidratante-118ml-x12'},
              ]
            }
          }
        },
      },

      /* PRUDCTOS ESTAPA 2 */
      etapa2 = {
        cereales: {
          name: 'none',
          class: 'none',
          distribution: {
            plataform1: {
              title: 'Cereales 4 cereales, arroz y avena',
              prods: [
                {name: 'Arroz y Avena', src_image: '/sites/default/files/custom-files/segundaetapa-cereales-arroz-avena_1.png', alt: 'donde comprar Cereal, donde comprar Cereal para bebes', url: '/producto/6-a-12-meses/arroz-y-avena-cereal-infantil-300g'},
                {name: '4 Cereales 300g', src_image: '/sites/default/files/custom-files/segundaetapa-cereales-4cereales_1.png', alt: 'donde comprar Cereal, donde comprar Cereal para bebes', url: '/producto/6-a-12-meses/cereal-infantil-4-cereales-etapa-2-bolsa-300g'},
                {name: '4 Cereales 90g', src_image: '/sites/default/files/custom-files/segundaetapa-cereales-4cerealessmall_0.png', alt: 'donde comprar Cereal, donde comprar Cereal para bebes', url: '/producto/6-a-12-meses/cereal-infantil-4-cereales-etapa-2-bolsa-300g'},
              ]
            }
          }
        },
        papillaCosecha: {
          name: 'Cosecha Natural',
          class: 'cosecha',
          distribution: {
            plataform1: {
              title: 'Papillas Cosecha Natural Fruta',
              prods: [
                {name: 'Ciruela Pasa', src_image: '/sites/default/files/custom-files/e2_cosecha_natural_fruta_mx_etiqueta_ciruelapasa_113g_120919_0_0.png', alt: 'donde comprar papillas, donde comprar papillas para bebes', url: '/producto/6-a-12-meses/cosecha-natural-ciruela-pasa-papilla-113g-x12'},
                {name: 'Coctel de Frutas', src_image: '/sites/default/files/custom-files/e2_cosecha_natural_fruta_coctelfruta_113g_120919_0_0.png', alt: 'donde comprar papillas, donde comprar papillas para bebes', url: '/producto/6-a-12-meses/cosecha-natural-coctel-de-frutas-papilla-113g'},
                {name: 'Durazno', src_image: '/sites/default/files/custom-files/e2_cosecha_natural_fruta_durazno_113g_120919_0_0.png', alt: 'donde comprar papillas, donde comprar papillas para bebes', url: '/producto/6-a-12-meses/cosecha-natural-durazno-papilla-113g-x12'},
                {name: 'Frutas Mixtas', src_image: '/sites/default/files/custom-files/e2_cosecha_natural_fruta_frutasmixtas_113g_120919_0_0.png', alt: 'donde comprar papillas, donde comprar papillas para bebes', url: '/producto/6-a-12-meses/cosecha-natural-frutas-mixtas-papilla-113g-x12'},
                {name: 'Frutas Tropicales', src_image: '/sites/default/files/custom-files/e2_cosecha_natural_fruta_frutastropicales_113g_120919_0_0.png', alt: 'donde comprar papillas, donde comprar papillas para bebes', url: '/producto/6-a-12-meses/cosecha-natural-frutas-tropicales-papilla-113g-x12'},
                {name: 'Mango', src_image: '/sites/default/files/custom-files/e2_cosecha_natural_fruta_mango_113g_120919_0_0.png', alt: 'donde comprar papillas, donde comprar papillas para bebes', url: '/producto/6-a-12-meses/cosecha-natural-mango-papilla-113g-x12'},
                {name: 'Manzana', src_image: '/sites/default/files/custom-files/e2_cosecha_natural_fruta_manzana_113g_120919_0_0.png', alt: 'donde comprar papillas, donde comprar papillas para bebes', url: '/producto/6-a-12-meses/cosecha-natural-manzana-papilla-113g-x12'},
                {name: 'Manzana  |  Guayaba', src_image: '/sites/default/files/custom-files/e2_cosecha_natural_fruta_manzanaguayaba_113g_120919_0_0.png', alt: 'donde comprar papillas, donde comprar papillas para bebes', url: '/producto/6-a-12-meses/cosecha-natural-manzana-guayaba-papilla-113g'},
                {name: 'Pera', src_image: '/sites/default/files/custom-files/e2_cosecha_natural_fruta_pera_113g_120919_0_0.png', alt: 'donde comprar papillas, donde comprar papillas para bebes', url: '/producto/6-a-12-meses/cosecha-natural-pera-papilla-113g-x12'},
                {name: 'Plátano', src_image: '/sites/default/files/custom-files/e2_cosecha_natural_fruta_platano_113g_120919_0_0.png', alt: 'donde comprar papillas, donde comprar papillas para bebes', url: '/producto/6-a-12-meses/cosecha-natural-platano-papilla-113g-x12'},
              ]
            },
            plataform2: {
              title: 'Papillas Cosecha Natural Vegetales',
              prods: [
                {name: 'Chayote', src_image: '/sites/default/files/custom-files/e2_cosecha_natural_vegetales_chayote_113g_120919_0.png', alt: 'donde comprar papillas, donde comprar papillas para bebes', url: '/producto/6-a-12-meses/cosecha-natural-chayote-113g-x12'},
                {name: 'Ejote con Calabaza', src_image: '/sites/default/files/custom-files/e2_cosecha_natural_vegetales_ejotecalabaza_113g_120919_0.png', alt: 'donde comprar papillas, donde comprar papillas para bebes', url: '/producto/6-a-12-meses/cosecha-natural-ejote-y-calabacitas-papilla-113g-x12'},
                {name: 'Mix de Vegetales', src_image: '/sites/default/files/custom-files/e2_cosecha_natural_vegetales_mixvegetales_113g_120919_0.png', alt: 'donde comprar papillas, donde comprar papillas para bebes', url: '/producto/6-a-12-meses/cosecha-natural-vegetales-mixtos-papilla-113g-x12'},
                {name: 'Zanahoria', src_image: '/sites/default/files/custom-files/e2_cosecha_natural_vegetales_zanahoria_113g_120919_0.png', alt: 'donde comprar papillas, donde comprar papillas para bebes', url: '/producto/6-a-12-meses/cosecha-natural-zanahoria-113g-x12'},
                {name: 'Espinaca con Papas', src_image: '/sites/default/files/custom-files/e2_cosecha_natural_vegetales_espinacapapa_113g_120919_0.png', alt: 'donde comprar papillas, donde comprar papillas para bebes', url: '/producto/6-a-12-meses/cosecha-natural-espinaca-papa-papilla-113g'},
              ]
            },
            plataform3: {
              title: 'Papillas con Yogurt',
              prods: [
                {name: 'Durazno', src_image: '/sites/default/files/custom-files/e2_yogurt_durazno.png', alt: 'donde comprar Yogurt, donde comprar Yogurt para bebes', url: '/producto/6-a-12-meses/cosecha-natural-durazno-yogurt-115g'},
                {name: 'Manzana', src_image: '/sites/default/files/custom-files/e2_yogurt_manzana.png', alt: 'donde comprar Yogurt, donde comprar Yogurt para bebes', url: '/producto/6-a-12-meses/cosecha-natural-manzana-yogurt-115g'},
                {name: 'Frutas Mixtas', src_image: '/sites/default/files/custom-files/e2_yogurt_frutasmixtas.png', alt: 'donde comprar Yogurt, donde comprar Yogurt para bebes', url: '/producto/6-a-12-meses/cosecha-natural-frutas-mixtas-yogurt-115g'},
              ]
            },
          }
        },

        papillaVeggie: {
          name: 'Veggie Fruit',
          class: 'veggie-fruit',
          distribution: {
            plataform1: {
              title: 'Papillas Veggie Fruit',
              prods: [
                {name: 'Manzana  |  Calabaza  |  Brócoli', src_image: '/sites/default/files/custom-files/e2_veggie_fruit_mx_etiqueta_manzanacalabazabrocoli_113g_120919_0.png', alt: 'donde comprar papillas, donde comprar papillas para bebes', url: '/producto/6-a-12-meses/veggie-fruit-manzana-calabaza-brocoli-papilla-113g'},
                {name: 'Pera  |  Zanahoria  |  Chícharo', src_image: '/sites/default/files/custom-files/e2_veggie_fruit_mx_etiqueta_perazanahoriachicharo_113g_120919_0.png', alt: 'donde comprar papillas, donde comprar papillas para bebes', url: '/producto/6-a-12-meses/veggie-fruit-pera-zanahoria-chicharo-papilla-113g'},
              ]
            },
          }
        },
        papillaSopa: {
          name: 'Sopita del Día',
          class: 'sopita',
          distribution: {
            plataform1: {
              title: 'Papillas Sopita del día',
              prods: [
                {name: 'Sopa de Res con Verduras', src_image: '/sites/default/files/custom-files/e2_sopita_mx_etiqueta_resverduras_113g_120919_2.png', alt: 'donde comprar Sopitas, donde comprar Sopitas para bebes', url: '/producto/6-a-12-meses/sopita-del-dia-res-con-verduras-papilla-113g'},
                {name: 'Sopa de Calabaza con Papa', src_image: '/sites/default/files/custom-files/e2_sopita_mx_etiqueta_calabazapapa_113g_120919_2.png', alt: 'donde comprar Sopitas, donde comprar Sopitas para bebes', url: '/producto/6-a-12-meses/sopita-del-dia-calabaza-con-papa-113g'},
                {name: 'Sopa de Pasta con Verduras', src_image: '/sites/default/files/custom-files/e2_sopita_mx_etiqueta_pastaverduras_113g_120919_2.png', alt: 'donde comprar Sopitas, donde comprar Sopitas para bebes', url: '/producto/6-a-12-meses/sopita-del-dia-pasta-con-verduras-papilla-113g'},
                {name: 'Sopa de Pollo', src_image: '/sites/default/files/custom-files/e2_sopita_mx_etiqueta_polloverduras_113g_120919_2.png', alt: 'donde comprar Sopitas, donde comprar Sopitas para bebes', url: '/producto/6-a-12-meses/sopita-del-dia-pollo-papilla-113g-x12'},
              ]
            },
          }
        },
        papillaComida: {
          name: 'Comidita Casera',
          class: 'comidita',
          distribution: {
            plataform1: {
              title: 'Papillas Comidita Casera',
              prods: [
                {name: 'Jamón con Verduras', src_image: '/sites/default/files/custom-files/e2_comidita_jamon_verduras_725x418_0.png', alt: 'donde comprar Comiditas, donde comprar Comiditas para bebes', url: '/producto/6-a-12-meses/comidita-casera-jamon-con-verduras-papilla-113g-x12'},
                {name: 'Pavo con Pasta', src_image: '/sites/default/files/custom-files/e2_comidita_pavo_verduras_pasta_725x418_0.png', alt: 'donde comprar Comiditas, donde comprar Comiditas para bebes', url: '/producto/6-a-12-meses/comidita-casera-pavo-con-verduras-y-pasta-papilla-113g'},
                {name: 'Pollo con Arroz', src_image: '/sites/default/files/custom-files/e2_comidita_pollo_verduras_arroz_725x418_2.png', alt: 'donde comprar Comiditas, donde comprar Comiditas para bebes', url: '/producto/6-a-12-meses/comidita-casera-pollo-con-verduras-y-arroz-papilla-113g-x2'},
                {name: 'Pollo con Pasta', src_image: '/sites/default/files/custom-files/e2_comidita_pollo_pasta_725x418_0.png', alt: 'donde comprar Comiditas, donde comprar Comiditas para bebes', url: '/producto/6-a-12-meses/comidita-casera-pollo-con-papas-113g-x12'},
                {name: 'Res con Arroz', src_image: '/sites/default/files/custom-files/e2_comidita_res_verdura_arroz_725x418_2.png', alt: 'donde comprar Comiditas, donde comprar Comiditas para bebes', url: '/producto/6-a-12-meses/comidita-casera-res-con-verduras-y-arroz-papilla-113g-x12'},
              ]
            },
          }
        },
        papillaYogurcito: {
          name: 'Mi Yogurcito',
          class: 'yogurcito',
          distribution: {
            plataform1: {
              title: 'Yogurts Mi Yogurcito',
              prods: [
                {name: 'Durazno', src_image: '/sites/default/files/custom-files/e2_yogurt_durazno.png', alt: 'donde comprar Yogurt, donde comprar Yogurt para bebes', url: '/producto/6-a-12-meses/cosecha-natural-durazno-yogurt-115g'},
                {name: 'Manzana', src_image: '/sites/default/files/custom-files/e2_yogurt_manzana.png', alt: 'donde comprar Yogurt, donde comprar Yogurt para bebes', url: '/producto/6-a-12-meses/cosecha-natural-manzana-yogurt-115g'},
                {name: 'Frutas Mixtas', src_image: '/sites/default/files/custom-files/e2_yogurt_frutasmixtas.png', alt: 'donde comprar Yogurt, donde comprar Yogurt para bebes', url: '/producto/6-a-12-meses/cosecha-natural-frutas-mixtas-yogurt-115g'},
              ]
            },
          }
        },
        papillaPostre: {
          name: 'Mi Postrecito',
          class: 'postrecito',
          distribution: {
            plataform1: {
              title: 'Papillas Mi Postrecito',
              prods: [
                {name: 'Postre delicia de Frutas', src_image: '/sites/default/files/custom-files/e2_postrecito_mx_etiqueta_deliciafrutas_113g_120919_0.png', alt: 'donde comprar Postres, donde comprar Postres para bebes', url: '/producto/6-a-12-meses/mi-postrecito-delicia-de-frutas-papilla-113g-x12'},
                {name: 'Postre Guayaba', src_image: '/sites/default/files/custom-files/e2_postrecito_mx_etiqueta_postreguayaba_113g_120919_0.png', alt: 'donde comprar Postres, donde comprar Postres para bebes', url: '/producto/6-a-12-meses/mi-postrecito-guayaba-papilla-113g-x12'},
                {name: 'Postre Manzana', src_image: '/sites/default/files/custom-files/e2_postrecito_mx_etiqueta_postremanzana_113g_120919_0.png', alt: 'donde comprar Postres, donde comprar Postres para bebes', url: '/producto/6-a-12-meses/mi-postrecito-manzana-113g-x12'},
              ]
            },
          }
        },
        pouchBaby: {
          name: 'none',
          class: 'none',
          distribution: {
            plataform1: {
              title: 'Baby Pouch',
              prods: [
                {name: 'Pera', src_image: '/sites/default/files/custom-files/e1_pouchbaby_pera.png', alt: 'donde comprar Pouch, donde comprar Pouch para bebes', url: '/producto/6-a-12-meses/pera-baby-pouch-100g'},
                {name: 'Plátano | Mango', src_image: '/sites/default/files/custom-files/e1_pouchbaby_platano-mango.png', alt: 'donde comprar Pouch, donde comprar Pouch para bebes', url: '/producto/6-a-12-meses/platano-mango-baby-pouch-100g'},
                {name: 'Mango', src_image: '/sites/default/files/custom-files/e1_pouchbaby_mango.png', alt: 'donde comprar Pouch, donde comprar Pouch para bebes', url: '/producto/6-a-12-meses/mango-baby-pouch-100g'},
                {name: 'Manzana', src_image: '/sites/default/files/custom-files/e1_pouchbaby_manzana.png', alt: 'donde comprar Pouch, donde comprar Pouch para bebes', url: '/producto/6-a-12-meses/manzana-baby-pouch-100g'},
                {name: 'Mango | Manzana', src_image: '/sites/default/files/custom-files/e1_pouchbaby_mango-manzana.png', alt: 'donde comprar Pouch, donde comprar Pouch para bebes', url: '/producto/6-a-12-meses/mango-manzana-baby-pouch-100g'},
              ]
            }
          }
        },
        pouchOrganico: {
          name: 'none',
          class: 'none',
          distribution: {
            plataform1: {
              title: 'Orgánico Baby Pouch',
              prods: [
                {name: 'Manzana  |  Kale  |  Higo', src_image: '/sites/default/files/custom-files/e1_pouchorganico_manzana-kale-higo.png', alt: 'donde comprar Pouch Orgánico, donde comprar Pouch Orgánico para bebes', url: '/producto/6-a-12-meses/organico-manzana-colrizada-higo-pouch-100g'},
                {name: 'Plátano  |  Mango', src_image: '/sites/default/files/custom-files/e1_pouchorganico_platano-mango.png', alt: 'donde comprar Pouch Orgánico, donde comprar Pouch Orgánico para bebes', url: '/producto/6-a-12-meses/organico-mango-platano-pouch-100g'},
                {name: 'Manzana  |  Mora  |  Espinaca', src_image: '/sites/default/files/custom-files/e1_pouchorganico_manzana-mora-espinaca.png', alt: 'donde comprar Pouch Orgánico, donde comprar Pouch Orgánico para bebes', url: '/producto/6-a-12-meses/organico-manzana-mora-espinaca-pouch-100g'},
                {name: 'Manzana', src_image: '/sites/default/files/custom-files/e1_pouchorganico_manzana.png', alt: 'donde comprar Pouch Orgánico, donde comprar Pouch Orgánico para bebes', url: '/producto/6-a-12-meses/organico-manzana-pouch-100g'},
                {name: 'Mango  |  Manzana  |  PERA', src_image: '/sites/default/files/custom-files/e1_pouchorganico_mango-manzana-pera.png', alt: 'donde comprar Pouch Orgánico, donde comprar Pouch Orgánico para bebes', url: '/producto/6-a-12-meses/organico-mango-manzana-pera-pouch-100g'},
              ]
            }
          }
        },
        bebidaHidratante: {
          name: 'Toque de Fruta',
          class: 'toquefruta',
          distribution: {
            plataform1: {
              title: 'Bebidas Hidratantes Toque de Fruta',
              prods: [
                {name: 'Uva Roja', src_image: '/sites/default/files/custom-files/e2_bebidas_toque_fruta_agua_uva_725x418_0.png', alt: 'donde comprar Bebidas Hidratantes, donde comprar Bebidas Hidratantes para bebes', url: '/producto/6-a-12-meses/toque-de-fruta-uva-roja-bebida-hidratante-118ml'},
                {name: 'Ciruela Pasa', src_image: '/sites/default/files/custom-files/e2_bebidas_toque_fruta_agua_ciruelapasa_725x418_0.png', alt: 'donde comprar Bebidas Hidratantes, donde comprar Bebidas Hidratantes para bebes', url: '/producto/6-a-12-meses/toque-de-fruta-ciruela-pasa-bebida-hidratante-175ml-x12'},
                {name: 'Coco', src_image: '/sites/default/files/custom-files/e2_bebidas_toque_fruta_agua_coco_725x418_0.png', alt: 'donde comprar Bebidas Hidratantes, donde comprar Bebidas Hidratantes para bebes', url: '/producto/6-a-12-meses/toque-de-fruta-coco-bebida-hidratante-175ml-x12'},
                {name: 'Mango', src_image: '/sites/default/files/custom-files/e2_bebidas_toque_fruta_agua_mango_725x418_0.png', alt: 'donde comprar Bebidas Hidratantes, donde comprar Bebidas Hidratantes para bebes', url: '/producto/6-a-12-meses/toque-de-fruta-mango-bebida-hidratante-175ml-x12'},
                {name: 'Frutas Mixtas', src_image: '/sites/default/files/custom-files/e2_bebidas_toque_fruta_agua_frutas_mixtas_725x418_0.png', alt: 'donde comprar Bebidas Hidratantes, donde comprar Bebidas Hidratantes para bebes', url: '/producto/6-a-12-meses/toque-de-fruta-frutas-mixtas-bebida-hidratante-118ml'},
              ]
            },
          }
        },
        bebidaJugo: {
          name: 'Cosecha Natural',
          class: 'cosecha',
          distribution: {
            plataform1: {
              title: 'Jugo Cosecha Natural',
              prods: [
                {name: 'Manzana  |  Ciruela', src_image: '/sites/default/files/custom-files/e2_jugo_cosecha_natural_mx_etiqueta_manzana_ciruela_120919_2.png', alt: 'donde comprar Jugos, donde comprar Jugos para bebes', url: '/producto/6-a-12-meses/cosecha-natural-manzana-y-ciruela-pasa-jugo-175ml-x12'},
                {name: 'Manzana', src_image: '/sites/default/files/custom-files/e2_jugo_cosecha_natural_manzana_725x418.png', alt: 'donde comprar Jugos, donde comprar Jugos para bebes', url: '/producto/6-a-12-meses/cosecha-natural-manzana-jugo-175ml-x12'},
                {name: 'Pera', src_image: '/sites/default/files/custom-files/e2_jugo_cosecha_natural_pera.png', alt: 'donde comprar Jugos, donde comprar Jugos para bebes', url: '/producto/6-a-12-meses/cosecha-natural-pera-jugo-175ml-x12'},
                {name: 'Uva Blanca', src_image: '/sites/default/files/custom-files/e2_jugo_cosecha_natural_mx_etiqueta_uva_blanca_120919_2.png', alt: 'donde comprar Jugos, donde comprar Jugos para bebes', url: '/producto/6-a-12-meses/cosecha-natural-uva-blanca-jugo-175ml-x12'},
              ]
            },
          }
        },
        bebidaVeggie: {
          name: 'Veggie Fruit',
          class: 'veggie-fruit',
          distribution: {
            plataform1: {
              title: 'Bebidas Fruta verdura - Veggie Fruit',
              prods: [
                {name: 'Pera  |  Mango  |  Calabacita', src_image: '/sites/default/files/custom-files/e2_jugo_veggie_fruit_pera_mango_calabacita_725x418.png', alt: 'donde comprar Jugos Veganos, donde comprar Jugos Veganos para bebes', url: '/producto/6-a-12-meses/veggie-fruit-pera-mango-calabacita-jugo-118ml'},
                {name: 'Zanahoria  |  Mango  |  Manzana', src_image: '/sites/default/files/custom-files/e2_jugo_veggie_fruit_manzana_mango_zana_725x418.png', alt: 'donde comprar Jugos Veganos, donde comprar Jugos Veganos para bebes', url: '/producto/6-a-12-meses/veggie-fruit-manzana-mango-zanahoria-jugo-118ml'},
                {name: 'Betabel  |  Manzana', src_image: '/sites/default/files/custom-files/e2_jugo_veggie_fruit_manzana_betabel_725x418.png', alt: 'donde comprar Jugos Veganos, donde comprar Jugos Veganos para bebes', url: '/producto/6-a-12-meses/veggie-fruit-manzana-betabel-jugo-118ml'},
                {name: 'Zanahoria  |  Naranja', src_image: '/sites/default/files/custom-files/e2_jugo_veggie_fruit_naranja_zana_725x418.png', alt: 'donde comprar Jugos Veganos, donde comprar Jugos Veganos para bebes', url: '/producto/6-a-12-meses/veggie-fruit-naranja-zanahoria-jugo-118ml'},
                {name: 'Pera  |  Kale (Col Rizada)', src_image: '/sites/default/files/custom-files/e2_jugo_veggie_fruit_pera_colrizada_725x418.png', alt: 'donde comprar Jugos Veganos, donde comprar Jugos Veganos para bebes', url: '/producto/6-a-12-meses/veggie-fruit-col-rizada-con-pera-jugo-118ml'},
              ]
            }
          }
        },
      },

      /* PRUDCTOS ESTAPA 3 */
      etapa3 = {
        cereales: {
          name: 'none',
          class: 'none',
          distribution: {
            plataform1: {
              title: 'Cereales 4 Cereales Plátano y Zanahoria y Trigo Manzana',
              prods: [
                {name: 'Manzana y Trigo', src_image: '/sites/default/files/custom-files/terceraetapa-cereales-trigo-manzana_1.png', alt: 'donde comprar Cereales, donde comprar Cereales para bebes', url: '/producto/6-a-12-meses/cereal-infantil-trigo-con-manzana-etapa-3-bolsa-300g'},
                {name: '4 cereales con zanahoria y plátano', src_image: '/sites/default/files/custom-files/terceraetapa-cereales-vegan_1.png', alt: 'donde comprar Cereales, donde comprar Cereales para bebes', url: '/6-a-12-meses/cereal-infantil-4-cereales-con-zanahoria-y-platano-etapa-3'},
              ]
            }
          }
        },

        papillaCosecha: {
          name: 'Cosecha Natural',
          class: 'cosecha',
          distribution: {
            plataform1: {
              title: 'Papillas Cosecha Natural',
              prods: [
                {name: 'Mango', src_image: '/sites/default/files/custom-files/e3_cosecha_natural_fruta_mango_170g_120919.png', alt: 'donde comprar papillas, donde comprar papillas para bebes', url: '/producto/6-a-12-meses/cosecha-natural-mango-papilla-170g-x12'},
                {name: 'Manzana', src_image: '/sites/default/files/custom-files/e3_cosecha_natural_fruta_manzana_170g_120919.png', alt: 'donde comprar papillas, donde comprar papillas para bebes', url: '/producto/6-a-12-meses/cosecha-natural-manzana-papilla-170g-x12'},
                {name: 'Pera', src_image: '/sites/default/files/custom-files/e3_cosecha_natural_fruta_pera_170g_120919.png', alt: 'donde comprar papillas, donde comprar papillas para bebes', url: '/producto/6-a-12-meses/cosecha-natural-pera-papilla-170g-x12'},
                {name: 'Durazno', src_image: '/sites/default/files/custom-files/e3_cosecha_natural_fruta_durazno_170g_120919.png', alt: 'donde comprar papillas, donde comprar papillas para bebes', url: '/producto/6-a-12-meses/cosecha-natural-durazno-papilla-170g-x12'},
                {name: 'Frutas Tropicales', src_image: '/sites/default/files/custom-files/e3_cosecha_natural_fruta_frutastropicales_170g_120919.png', alt: 'donde comprar papillas, donde comprar papillas para bebes', url: '/producto/6-a-12-meses/cosecha-natural-frutas-tropicales-papilla-170g-x12'},
                {name: 'Manzana  |  Mango', src_image: '/sites/default/files/custom-files/e3_cosecha_natural_fruta_manzanamango_170g_120919.png', alt: 'donde comprar papillas, donde comprar papillas para bebes', url: '/producto/6-a-12-meses/cosecha-natural-manzana-y-mango-papilla-170g-x12'},
                {name: 'Frutas Mixtas', src_image: '/sites/default/files/custom-files/e3_cosecha_natural_fruta_frutasmixtas_170g_120919.png', alt: 'donde comprar papillas, donde comprar papillas para bebes', url: '/producto/6-a-12-meses/cosecha-natural-frutas-mixtas-papillas-170g'},
              ]
            }
          }
        },
        papillaComida: {
          name: 'Comidita Casera',
          class: 'comidita',
          distribution: {
            plataform1: {
              title: 'Papillas Comida Casera',
              prods: [
                {name: 'Res y Arroz', src_image: '/sites/default/files/custom-files/e3_comidita_res_verduras_arroz_725x418_2.png', alt: 'donde comprar comiditas, donde comprar comiditas para bebes', url: '/producto/6-a-12-meses/comidita-casera-res-con-verduras-y-arroz-170g'},
                {name: 'Pollo y Arroz', src_image: '/sites/default/files/custom-files/e3_comidita_pollo_verduras_arroz_725x418_2.png', alt: 'donde comprar comiditas, donde comprar comiditas para bebes', url: '/producto/6-a-12-meses/comidita-casera-pollo-con-verduras-y-arroz-papilla-170g-x12'},
                {name: 'Pavo y Pasta', src_image: '/sites/default/files/custom-files/e3_comidita_pavo_verduras_pasta_725x418_0.png', alt: 'donde comprar comiditas, donde comprar comiditas para bebes', url: '/producto/6-a-12-meses/comidita-casera-pavo-con-verduras-y-pasta-170g-x12'},
                {name: 'Jamón', src_image: '/sites/default/files/custom-files/e3_comidita_jamon_verduras_arroz_725x418_0.png', alt: 'donde comprar comiditas, donde comprar comiditas para bebes', url: '/producto/6-a-12-meses/comidita-casera-jamon-con-verduras-y-arroz-papilla-170g-x12'},
                {name: 'Ternera y Pasta', src_image: '/sites/default/files/custom-files/e3_comidita_ternera_verduras_pasta_725x418_0.png', alt: 'donde comprar comiditas, donde comprar comiditas para bebes', url: '/producto/6-a-12-meses/comidita-casera-ternera-con-verduras-y-pasta-papilla-170g-x12'},
              ]
            }
          }
        },
        bebidaHidratante: {
          name: 'Toque de Fruta',
          class: 'toquefruta',
          distribution: {
            plataform1: {
              title: 'Bebidas Hidratrantes Toque de Fruta',
              prods: [
                {name: 'Piña y Coco', src_image: '/sites/default/files/custom-files/e3_bebidas_toque_fruta_pina_coco_725x418.png', alt: 'donde comprar bebidas, donde comprar bebidas para bebes', url: '/producto/6-a-12-meses/toque-de-fruta-pinia-coco-bebida-hidratante-230ml-x24'},
                {name: 'Manzana  |  Pera', src_image: '/sites/default/files/custom-files/e3_bebidas_toque_fruta_manzana_pera_725x418_0.png', alt: 'donde comprar bebidas, donde comprar bebidas para bebes', url: '/producto/6-a-12-meses/toque-de-fruta-manzana-y-pera-bebida-hidratante-230ml-x24'},
                {name: 'Mango  |  Piña', src_image: '/sites/default/files/custom-files/e3_bebidas_toque_fruta_mango_pina_725x418_0.png', alt: 'donde comprar bebidas, donde comprar bebidas para bebes', url: '/producto/6-a-12-meses/toque-de-fruta-mango-pinia-bebida-hidratante-230ml'},
              ]
            },
          }
        },
        bebidaJugos: {
          name: 'Cosecha Natural',
          class: 'cosecha',
          distribution: {
            plataform1: {
              title: 'Jugo Cosecha Natural',
              prods: [
                {name: 'Pera', src_image: '/sites/default/files/custom-files/e3_jugo_cosecha_natural_fruta_pera_725x418.png', alt: 'donde comprar Jugos, donde comprar Jugos para bebes', url: '/producto/6-a-12-meses/cosecha-natural-pera-jugo-230ml-x24'},
                {name: 'Manzana', src_image: '/sites/default/files/custom-files/e3_jugo_cosecha_natural_fruta_manzana_725x418.png', alt: 'donde comprar Jugos, donde comprar Jugos para bebes', url: '/producto/6-a-12-meses/cosecha-natural-manzana-jugo-230ml-x24'},
              ]
            },
          }
        },
        snackPuffs: {
          name: 'none',
          class: 'none',
          distribution: {
            plataform1: {
              title: 'Snacks Puffs',
              prods: [
                {name: 'Manzana  |  Fresa', src_image: '/sites/default/files/custom-files/e4_snacks_puffs_fresa-manzana.png', alt: 'donde comprar Puffs, donde comprar Puffs para bebes', url: '/junior-puffs-manzana-y-fresa-42-g'},
                {name: 'Mora Azul', src_image: '/sites/default/files/custom-files/e4_snacks_puffs_moraazul.png', alt: 'donde comprar Puffs, donde comprar Puffs para bebes', url: '/producto/1-a-3-anios/mora-azul-snacks-42g'},
                {name: 'Plátano', src_image: '/sites/default/files/custom-files/e4_snacks_puffs_platano.png', alt: 'donde comprar Puffs, donde comprar Puffs para bebes', url: '/producto/1-a-3-anios/platano-snacks-42g'},
                {name: 'Camote', src_image: '/sites/default/files/custom-files/e4_snacks_puffs_camote.png', alt: 'donde comprar Puffs, donde comprar Puffs para bebes', url: '/producto/1-a-3-anios/camote-snacks-42g'},
              ]
            }
          }
        },
        snackChips: {
          name: 'none',
          class: 'none',
          distribution: {
            plataform1: {
              title: 'Snacks Chips',
              prods: [
                {name: 'Calabacita', src_image: '/sites/default/files/custom-files/e4_snacks_chips_calabacita.png', alt: 'donde comprar Puffs, donde comprar Puffs para bebes', url: '/producto/1-a-3-anios/calabaza-snacks-25g'},
              ]
            }
          }
        },
      },

      /* PRUDCTOS ESTAPA 4 */
      etapa4 = {
        cereales: {
          name: 'none',
          class: 'none',
          distribution: {
            plataform1: {
              title: 'Cereales Trigo Miel',
              prods: [
                {name: 'Miel y Trigo', class: 'w-91', button: 'cta-1', src_image: '/sites/default/files/custom-files/cuartaetapa-cereales-trigo-miel_1.png', alt: 'donde comprar Cereales, donde comprar Cereales para bebes', url: '/producto/6-a-12-meses/cereal-infantil-trigo-con-miel-bolsa-300g'},
              ]
            }
          }
        },
        papillaComida: {
          name: 'Gourmet',
          class: 'gourmet',
          distribution: {
            plataform1: {
              title: 'Papillas Comidita Casera',
              prods: [
                {name: 'Pollo con Papas', src_image: '/sites/default/files/custom-files/e4_comidita_pollo-y-papas.png', alt: 'donde comprar Junior Comidas, donde comprar Junior Comidas para bebes', url: '/producto/6-a-12-meses/gourmet-pollo-y-papas-papilla-250g-x12'},
                {name: 'Res', src_image: '/sites/default/files/custom-files/e4_comidita_res-y-arroz.png', alt: 'donde comprar Junior Comidas, donde comprar Junior Comidas para bebes', url: '/producto/6-a-12-meses/gourmet-res-con-verduras-y-arroz-papilla-250g-x12'},
                {name: 'Pavo con Arroz', src_image: '/sites/default/files/custom-files/e4_comidita_pavo.png', alt: 'donde comprar Junior Comidas, donde comprar Junior Comidas para bebes', url: '/producto/6-a-12-meses/gourmet-pavo-con-verduras-y-arroz-papilla-250g-x12'},
                {name: 'Pasta', src_image: '/sites/default/files/custom-files/e4_comidita_res-y-pasta.png', alt: 'donde comprar Junior Comidas, donde comprar Junior Comidas para bebes', url: '/producto/6-a-12-meses/gourmet-res-con-verduras-y-pasta-papilla-250g-x12'},
              ]
            }
          }
        },
        pouchFrutas: {
          name: 'none',
          class: 'none',
          distribution: {
            plataform1: {
              title: 'Pouch Junior Frutisnack',
              prods: [
                {name: 'Manzana', src_image: '/sites/default/files/custom-files/e4_pouch_junior_frutisnack_manzana.png', alt: 'donde comprar Junior Pouch, donde comprar Junior Pouch para bebes', url: '/junior-pouch-manzana-etapa-3-110-g'},
                {name: 'Mango', src_image: '/sites/default/files/custom-files/e4_pouch_junior_frutisnack_mango.png', alt: 'donde comprar Junior Pouch, donde comprar Junior Pouch para bebes', url: '/junior-pouch-mango-etapa-3-110-g'},
                {name: 'Durazno', src_image: '/sites/default/files/custom-files/e4_pouch_junior_frutisnack_durazno.png', alt: 'donde comprar Junior Pouch, donde comprar Junior Pouch para bebes', url: '/junior-pouch-durazno-etapa-3-110-g'},
                {name: 'Plátano', src_image: '/sites/default/files/custom-files/e4_pouch_junior_frutisnack_platano.png', alt: 'donde comprar Junior Pouch, donde comprar Junior Pouch para bebes', url: '/junior-pouch-platano-etapa-3-110-g'},
                {name: 'Pera', src_image: '/sites/default/files/custom-files/e4_pouch_junior_frutisnack_pera.png', alt: 'donde comprar Junior Pouch, donde comprar Junior Pouch para bebes', url: '/junior-pouch-pera-etapa-3-110-g'},
                {name: 'Frutas Mixtas', src_image: '/sites/default/files/custom-files/e4_pouch_junior_frutisnack_frutasmixtas.png', alt: 'donde comprar Junior Pouch, donde comprar Junior Pouch para bebes', url: '/junior-pouch-frutas-mixtas-etapa-3-120-g'},
                {name: 'Manzana  |  Guayaba  |  Plátano', src_image: '/sites/default/files/custom-files/e4_pouch_junior_frutisnack_manzana-guayaba-platano.png', alt: 'donde comprar Junior Pouch, donde comprar Junior Pouch para bebes', url: '/junior-pouch-manzana-guayaba-platano-etapa-3-110-g'},
                {name: 'Coctel de Frutas', src_image: '/sites/default/files/custom-files/e4_pouch_junior_frutisnack_coctel.png', alt: 'donde comprar Junior Pouch, donde comprar Junior Pouch para bebes', url: '/producto/1-a-3-anios/junior-cosecha-natural-coctel-de-frutas-pouch-110g'},
                {name: 'Delicia de Frutas', src_image: '/sites/default/files/custom-files/e4_pouch_junior_frutisnack_delicia.png', alt: 'donde comprar Junior Pouch, donde comprar Junior Pouch para bebes', url: '/junior-pouch-postre-delicia-de-frutas-etapa-3-110-g'},
                {name: 'Manzana  |  Ciruela Pasa', src_image: '/sites/default/files/custom-files/e4_pouch_junior_frutisnack_manzana-ciruela.png', alt: 'donde comprar Junior Pouch, donde comprar Junior Pouch para bebes', url: '/producto/1-a-3-anios/junior-cosecha-natural-manzana-ciruela-pasa-pouch-110g'},
              ]
            }
          }
        },
        pouchVeggies: {
          name: 'none',
          class: 'none',
          distribution: {
            plataform1: {
              title: 'Pouch Junior Veggiesnack',
              prods: [
                {name: 'Mango  |  Manzana  |  Zanahoria', src_image: '/sites/default/files/custom-files/e4_pouch_junior_veggiesnack_mango-manzana-zanahoria.png', alt: 'donde comprar Junior Pouch, donde comprar Junior Pouch para bebes', url: '/junior-pouch-mango-manzana-zanahoria-etapa-3-110-g'},
                {name: 'Manzana  |  Pera  |  Durazno', src_image: '/sites/default/files/custom-files/e4_pouch_junior_veggiesnack_manzana-pera-durazno.png', alt: 'donde comprar Junior Pouch, donde comprar Junior Pouch para bebes', url: '/junior-pouch-pera-manzana-durazno-etapa-3-110-g'},
                {name: 'Pera  |  Mango', src_image: '/sites/default/files/custom-files/e4_pouch_junior_veggiesnack_pera-mango.png', alt: 'donde comprar Junior Pouch, donde comprar Junior Pouch para bebes', url: '/junior-pouch-pera-mango-etapa-3-110-g'},
                {name: 'Manzana  |  Durazno  |  Espinaca', src_image: '/sites/default/files/custom-files/e4_pouch_junior_veggiesnack_manzana-durazno-espinaca.png', alt: 'donde comprar Junior Pouch, donde comprar Junior Pouch para bebes', url: '/producto/1-a-3-anios/junior-veggie-fruit-manzana-durazno-espinaca-pouch-110g'},
                {name: 'Pera  |  Calabaza  |  Mango', src_image: '/sites/default/files/custom-files/e4_pouch_junior_veggiesnack_pera-calabaza-mango.png', alt: 'donde comprar Junior Pouch, donde comprar Junior Pouch para bebes', url: '/junior-pouch-pera-calabaza-mango-etapa-3-110-g'},
              ]
            }
          }
        },
        pouchYogurt: {
          name: 'none',
          class: 'none',
          distribution: {
            plataform1: {
              title: 'Pouch Junior Yogusnack',
              prods: [
                {name: 'Manzana  |  Ciruela Pasa', src_image: '/sites/default/files/custom-files/e4_pouch_junior_yogusnack_manzana-ciruela.png', alt: 'donde comprar Junior Pouch, donde comprar Junior Pouch para bebes', url: '/producto/1-a-3-anios/junior-yogurt-manzana-ciruela-pasa-pouch-110g'},
                {name: 'Pera |  Plátano', src_image: '/sites/default/files/custom-files/e4_pouch_junior_yogusnack_pera-platano.png', alt: 'donde comprar Junior Pouch, donde comprar Junior Pouch para bebes', url: '/producto/1-a-3-anios/junior-yogurt-pera-platano-pouch-110g'},
                {name: 'Manzana', src_image: '/sites/default/files/custom-files/e4_pouch_junior_yogusnack_manzana.png', alt: 'donde comprar Junior Pouch, donde comprar Junior Pouch para bebes', url: '/producto/1-a-3-anios/junior-yogurt-manzana-pouch-110g'},
              ]
            }
          }
        },
        snackGalletas: {
          name: 'none',
          class: 'none',
          distribution: {
            plataform1: {
              title: 'Snacks Galletitas',
              prods: [
                {name: 'Vainilla', src_image: '/sites/default/files/custom-files/e4_snacks_galletas-vainilla.png', alt: 'donde comprar Galletas, donde comprar Galletas para bebes', url: '/producto/1-a-2-anos/junior-galletitas-vainilla'},
              ]
            }
          }
        },
      };


      function getParams(params) {
        var sPaginaURL = window.location.search.substring(1);
        var sURLVariables = sPaginaURL.split('&');
          for (var i = 0; i < sURLVariables.length; i++) {
            var sParametro = sURLVariables[i].split('=');
            if (sParametro[0] == params) {
              return sParametro[1];
            }
          }
        return null;
      }

      var paramEtapa = getParams('prodstage'),
          paramVariedad = getParams('prodvariety');

      if (paramEtapa != null) {
        /* CHANGE IMG CLASS BY STAGE SELECTED */
        $('.stage-li').each(function(index) {
          var liActive = $(this).attr('id');
          if (liActive == paramEtapa) {
            $(this).addClass('active');
          } // endif
          else  {
            $(this).removeClass('active');
          } // endelse
        });

        /* Value all filters to display select*/
        $('.drop-opt').each(function(index) {
          var filterData = $(this).attr('data-id');
          if (filterData == paramEtapa) {
            $(this).removeClass('filter-hide');
            $(this).addClass('filter-active');

          }
          else  {
            $(this).removeClass('filter-active');
            $(this).addClass('filter-hide');
          }
        });

        if (paramVariedad != null) {
          $('.drop-opt').each(function(index) {
            var selectData = $(this).attr('data-id');
            if (selectData == paramEtapa) {
              $(this).val(paramVariedad);
            }
          });
          getProducts(paramEtapa, paramVariedad);
        }
        else{
          getProducts(paramEtapa, 'hide');
        }

      } // endif
      else {
        /* Show all products by Etapa1 */
        getProducts('etapa1', 'hide');
      }



      /* CLIC ON STAGE */
      $('.stage-li').click(function() {
        event.preventDefault();
        var stage = $(this).attr('id');

        /* Change li class by stage selected */
        $('.stage-li').each(function(index) {
          var liActive = $(this).attr('id');
          if (liActive == stage) {
            $(this).addClass('active');
          } // endif
          else  {
            $(this).removeClass('active');
          } // endelse
        });

        /* Change options value to display select*/
        $('.drop-opt').each(function(index) {
          var filterData = $(this).attr('data-id');
          if (filterData == stage) {
            $(this).removeClass('filter-hide');
            $(this).addClass('filter-active');
          }
          else  {
            $(this).removeClass('filter-active');
            $(this).addClass('filter-hide');
          }
        });

        getProducts(stage, 'hide');

      });

      /* CLIC ON CATEGORY PRODUCT */
      $('.productos-filter').change(function(){
        var category = $(this).val(),
            categoryData = $(this).attr('data-id');

        getProducts(categoryData,category);
      });

      /* FUNCTION TO RETURN PRODUCTS */
      function getProducts(categoryData, category){
        var data = [],
            filterType = '',
            filterKey = '',
            armado = '',
            item = '',
            i = 1,
            j = 0,
            k = 1;

        switch(categoryData){
          case 'etapa1':
            data = etapa1;
            break;
          case 'etapa2':
            data = etapa2;
            break;
          case 'etapa3':
            data = etapa3;
            break;
          case 'etapa4':
            data = etapa4;
            break;
        }// endswitch

        // Clean block container
        $("#prods-block").empty();

        if (category == 'hide') {
          // Each producs to display content by array
          $.each(data, function(key, variety) {

            $.each(variety.distribution, function(keytwo, plataform) {

              //inital variety block
              armado += '<div class="row-nido section-plataform">'+
                          '<div class="row-nido title-variety">'+
                            '<div class="col-lg-4 col-12 text-center">'+
                              '<img class="w-100" src="/sites/default/files/custom-files/dashed-line-prod-white.svg">'+
                            '</div>'+
                            '<div class="col-lg-4 col-12 text-center">'+
                              '<div class="center-ind">'+
                                '<span class="ind-prod">'+plataform.title+'</span>'+
                              '</div>'+
                            '</div>'+
                            '<div class="col-lg-4 col-12 text-center">'+
                              '<img class="w-100" src="/sites/default/files/custom-files/dashed-line-prod-white.svg">'+
                            '</div>'+
                          '</div>'+
                          '<div class="col-sm-12">'+
                            '<section class="slider1">'+
                              '<div class="cov">';

                if (variety.name != 'none') {
                  armado += '<div class="indicador-etapa text-center '+variety.class+'"></div>';
                }

                armado += '<div class="coverflow top10 bot10 block-slider '+categoryData+'-'+key+'-'+variety.class+'" id="'+key+'-'+variety.class+'-'+k+'">'+
                            '<a class="prev-arrow slide-arrow" data-ind="'+key+'-'+variety.class+'-'+k+'"></a>';

                // Each plataforms to display image product by array
                $.each(plataform.prods, function(keythree, product) {
                  armado += '<a class="slide-item" data-ind="'+key+'-'+variety.class+'-'+k+'"><img src="'+product.src_image+'" class="coverflow__image" alt="'+product.alt+'" /></a>'
                  j++;
                }); // endeach

                armado += '<a class="next-arrow slide-arrow" data-ind="'+key+'-'+variety.class+'-'+k+'"></a>'+
                            '</div>'+
                          '</div>'+
                          '</section>';

                // Each plataforms to display title and button product by array
                $.each(plataform.prods, function(keyfor, butt) {
                  var aciveClass = (i == j) ? 'prodesc-active' : 'prodesc-hide',
                      classBtn = (butt.url == 'none') ? 'button-hide' : ' ',
                      item = key+'-'+variety.class+'-'+k;

                      armado += '<div class="pt-2 pb-4 col-sm-12 text-center '+aciveClass+' '+item+'" id="'+item+'-'+i+'">'+
                                  '<p>'+butt.name+'</p>'+
                                  '<a class="cta-blue '+classBtn+'" href="'+butt.url+'" target="_blank">Ver producto</a>'+
                                '</div>';

                  i++;
                }); // endeach

                i = 1;
                j = 0;

                armado += '</div></div>';
              k++;
            }); //endeach
            k = 1;


          }); // endeach

        }
        else {
          $.each(data[category].distribution, function(key, plataform) {
            //inital variety block
            armado += '<div class="row-nido section-plataform">'+
                        '<div class="row-nido title-variety">'+
                          '<div class="col-lg-4 col-12 text-center">'+
                            '<img class="w-100" src="/sites/default/files/custom-files/dashed-line-prod-white.svg">'+
                          '</div>'+
                          '<div class="col-lg-4 col-12 text-center">'+
                            '<div class="center-ind">'+
                              '<span class="ind-prod">'+plataform.title+'</span>'+
                            '</div>'+
                          '</div>'+
                          '<div class="col-lg-4 col-12 text-center">'+
                            '<img class="w-100" src="/sites/default/files/custom-files/dashed-line-prod-white.svg">'+
                          '</div>'+
                        '</div>'+
                        '<div class="col-sm-12">'+
                          '<section class="slider1">'+
                            '<div class="cov">';

              if (data[category].name != 'none') {
                armado += '<div class="indicador-etapa text-center '+data[category].class+'"></div>';
              }

              armado += '<div class="coverflow top10 bot10 block-slider '+categoryData+'-'+key+'-'+data[category].class+'" id="'+category+'-'+data[category].class+'-'+k+'">'+
                          '<a class="prev-arrow slide-arrow" data-ind="'+category+'-'+data[category].class+'-'+k+'"></a>';

              // Each plataforms to display image product by array
              $.each(plataform.prods, function(keythree, product) {
                armado += '<a class="slide-item" data-ind="'+category+'-'+data[category].class+'-'+k+'"><img src="'+product.src_image+'" class="coverflow__image" alt="'+product.alt+'" /></a>'
                j++;
              }); // endeach

              armado += '<a class="next-arrow slide-arrow" data-ind="'+category+'-'+data[category].class+'-'+k+'"></a>'+
                          '</div>'+
                        '</div>'+
                        '</section>';

              // Each plataforms to display title and button product by array
              $.each(plataform.prods, function(keyfor, butt) {
                var aciveClass = (i == j) ? 'prodesc-active' : 'prodesc-hide',
                    classBtn = (butt.url == 'none') ? 'button-hide' : ' ',
                    item = category+'-'+data[category].class+'-'+k;

                    armado += '<div class="pt-2 pb-4 col-sm-12 text-center '+aciveClass+' '+item+'" id="'+item+'-'+i+'">'+
                                '<p>'+butt.name+'</p>'+
                                '<a class="cta-blue '+classBtn+'" href="'+butt.url+'" target="_blank">Ver producto</a>'+
                              '</div>';

                i++;
              }); // endeach

              i = 1;
              j = 0;

              armado += '</div></div>';
              k++;
            }); //endeach
            k = 1;


        }

        // Appear content by array
        $("#prods-block").append(armado);

        var a = document.getElementsByClassName("slide-item");
        var cfImg = document.getElementsByClassName("coverflow__image")

        var scaleI = 0;
        for (scaleI; scaleI < a.length; scaleI++) {
          if (scaleI === 3) {
            continue;
          } else {
            a[scaleI].style.cursor = "default";
            a[scaleI].addEventListener("click", prevDef);
          }
        }

        function prevDef(e) {
          e.preventDefault();
        }

        function forScale(coverflowPos) {
          for (scaleI = 0; scaleI < a.length; scaleI++) {
            a[scaleI].style.cursor = "default";
            a[scaleI].addEventListener("click", prevDef);
          }
          for (scaleI = 0; scaleI < cfImg.length; scaleI++) {
            if (cfImg[scaleI].getAttribute("data-coverflow-index") == coverflowPos) {
              cfImg[scaleI].parentElement.style.cursor = "pointer";
              cfImg[scaleI].parentElement.removeEventListener("click", prevDef);
            }
          }
        }
        //end added by Chase

        function setupCoverflow(coverflowContainer) {
          var coverflowContainers;

          if (typeof coverflowContainer !== "undefined") {
            if (Array.isArray(coverflowContainer)) {
              coverflowContainers = coverflowContainer;
            } else {
              coverflowContainers = [coverflowContainer];
            }
          } else {
            coverflowContainers = Array.prototype.slice.apply(document.getElementsByClassName('coverflow'));
          }

          coverflowContainers.forEach(function(containerElement) {
            var coverflow = {};
            var prevArrows, nextArrows;

            //capture coverflow elements
            coverflow.container = containerElement;
            coverflow.images = Array.prototype.slice.apply(containerElement.getElementsByClassName('coverflow__image'));
            coverflow.position = Math.floor(coverflow.images.length / 2) + 1;

            //set indicies on images
            coverflow.images.forEach(function(coverflowImage, i) {
              coverflowImage.dataset.coverflowIndex = i + 1;
            });

            //set initial position
            coverflow.container.dataset.coverflowPosition = coverflow.position;

            //get prev/next arrows
            prevArrows = Array.prototype.slice.apply(coverflow.container.getElementsByClassName("prev-arrow"));
            nextArrows = Array.prototype.slice.apply(coverflow.container.getElementsByClassName("next-arrow"));

            //add event handlers
            function setPrevImage() {
              coverflow.position = Math.max(1, coverflow.position - 1);
              coverflow.container.dataset.coverflowPosition = coverflow.position;
              //call the functin forScale added
              forScale(coverflow.position);
            }

            function setNextImage() {
              coverflow.position = Math.min(coverflow.images.length, coverflow.position + 1);
              coverflow.container.dataset.coverflowPosition = coverflow.position;
              //call the function Chase added
              forScale(coverflow.position);
            }

            function jumpToImage(evt) {
              coverflow.position = Math.min(coverflow.images.length, Math.max(1, evt.target.dataset.coverflowIndex));
              coverflow.container.dataset.coverflowPosition = coverflow.position;
              //start added by Chase
              setTimeout(function() {
                forScale(coverflow.position);
              }, 1);
              //end added by Chase
            }

            function onKeyPress(evt) {
              switch (evt.which) {
                case 37: //left arrow
                  setPrevImage();
                  break;
                case 39: //right arrow
                  setNextImage();
                  break;
              }
            }

            function wheel(event) {
              switch(event.deltaX < 0) {
                case true:
                  setPrevImage();
                  break;
                case false  :
                 setNextImage();
                  break;
              }
              //console.log("x: " + event.deltaX, "y: " + event.deltaY)
            }

            function drag(event) {
              waitForFinalEvent(function() {
                  switch(event.mouseX < 0) {
                    case true:
                      setPrevImage();
                      break;
                    case false  :
                     setNextImage();
                      break;
                  }
                  //console.log("x: " + event.deltaX, "y: " + event.deltaY)
              }, 50, 'drag');
            }

            var waitForFinalEvent = (function () {
                var timers = {};
                return function (callback, ms, uniqueId) {
                    if (!uniqueId) {
                        uniqueId = "Don't call this twice without a uniqueId";
                    }
                    if (timers[uniqueId]) {
                        clearTimeout (timers[uniqueId]);
                    }
                    timers[uniqueId] = setTimeout(callback, ms);
                };
            })();

            prevArrows.forEach(function(prevArrow) {
              prevArrow.addEventListener('click', setPrevImage);
            });
            nextArrows.forEach(function(nextArrow) {
              nextArrow.addEventListener('click', setNextImage);
            });
            coverflow.images.forEach(function(image) {
              image.addEventListener('click', jumpToImage);
            });
            window.addEventListener('keyup', onKeyPress);
            containerElement.addEventListener('wheel', wheel);
            containerElement.addEventListener('drag', drag);

          });
        }


        setupCoverflow();

        /* Clic on arrows */
        $('.slide-arrow').click(function() {
          var dataInd = $(this).attr('data-ind'),
              itemPos = $('#'+dataInd).attr('data-coverflow-position');

          /* Enabled or Disabled button by arrow */
          $('.'+dataInd).each(function(index) {
            var comp = $(this).attr('id');
            if (dataInd+'-'+itemPos == comp) {
              $(this).removeClass('prodesc-hide');
              $(this).addClass('prodesc-active');
            }
            else {
              $(this).removeClass('prodesc-active');
              $(this).addClass('prodesc-hide');
            }
          });

        });


        /* Clic on products */
        $('.slide-item').click(function() {
          var dataInd = $(this).attr('data-ind'),
              itemPos = $('#'+dataInd).attr('data-coverflow-position');

          /* Enabled or Disabled button by product */
          $('.'+dataInd).each(function(index) {
            var comp = $(this).attr('id');
            if (dataInd+'-'+itemPos == comp) {
              $(this).removeClass('prodesc-hide');
              $(this).addClass('prodesc-active');
            }
            else {
              $(this).removeClass('prodesc-active');
              $(this).addClass('prodesc-hide');
            }
          });

        });



      };




    }; // End controllerFilters

    controllerFilters();

  });
})(jQuery);
