(function($) {

  $(document).ready(function($) {

    // Can also be used with $(document).ready()
    $(window).on('load', function(){
      $('.flexslider').flexslider({
        animation: "slide",
        directionNav:false,
        /*itemWidth: 1349,*/
        animationLoop: true,
        slideshow: true,
      });

      getContent('videos', 'todas', 'todos');
    });

    $("#tab2").click(function(){
      $(".dropdown-filter").addClass("podcast-align")
    });
    $("#tab1").click(function(){
      $(".dropdown-filter").removeClass("podcast-align")
    });

    // Click function to dynamic icon on dropdown
    $('ul.newselect2 .li-temas').click(function(){
      var rel = $(this).attr('rel'),
          textodiv = $(this).text();

      // Callback to get items
      var stageId = ( $('.stage-selector').attr('id') === undefined ) ? 'todas' : $('.stage-selector').attr('id'),
          type = $('.type-selector').attr('id');

      getContent(type, stageId, rel);
    });


    /* -- FILTERS FUNCTIONALITY -- */
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

    var paramType = getParams('type')
        paramStage = getParams('stage'),
        paramTheme = getParams('theme');

    if (paramType !== null) {
      var callStage = ( paramStage !== null ) ? paramStage : 'todas',
          callTheme = ( paramTheme !== null ) ? paramTheme : 'todos';

      getContent(paramType, callStage, callTheme);

      if (paramType == 'podcast') {
        $('#tab1').addClass('inactive');
        $('#tab2').removeClass('inactive');
      }

    }// endif

    // Click function to tabs of content
    $('.type-tab').click(function(){
      var type = $(this).attr('id');

      //Change ID on general container
      $('.container').attr('id', type+'C');

      type = ( type == 'tab1' ) ? 'videos' : 'podcast';
      $('.type-selector').attr('id', type);

      // Return default status on dropdowns
      $('#select-item1').html('<div class="stage-selector" id="todas"></div>Etapas');
      $('#select-item2').addClass('temas-icn');
      $('#select-item2').html('<div class="theme-selector" id="todos"></div>Temas');

      // Callback to get items
      getContent(type, 'todas', 'todos');
    });

    // Click function to dynamic icon on dropdown
    $('ul.newselect1 .li-temas').click(function(){
      var rel = $(this).attr('rel'),
          textodiv = $(this).text();

      //$('#select-item1').html('<div class="stage-selector" id="'+rel+'"></div>'+textodiv );

      var themeId = ( $('.theme-selector').attr('id') === undefined ) ? 'todos' : $('.theme-selector').attr('id'),
          type = $('.type-selector').attr('id');

      // Callback to get items
      getContent(type, rel, themeId);
    });


    function getText(paramSelector, paramRel) {
      var textResult = '';
      $('.'+paramSelector+' li').each(function(){
        if ( $(this).attr('rel') == paramRel ) {
          textResult = $(this).text();
        }
      });
      return textResult;
    }

    /* Function to return content */
    function getContent(type, stage, theme){
      var data = [],
          armado ='',
          its = 0;


      var arrayVideonew  = {
            video9: {
              title: 'CÓLICO, REFLUJO Y ESTREÑIMIENTO ',
              auth: 'Pediatra',
              time: '4:11 min',
              desc: 'El Pediatra nos habla acerca de problemas digestivos.',
              src_image: '/sites/default/files/custom-files/reflujo_colico.jpg',
              alt: 'El Pediatra nos habla acerca de problemas digestivos.',
              nid: '3852476',
              stage: [ 'etapa4' ],
              theme: [ 'salud', 'alimentacion' ]
            },
            video8: {
              title: 'LECHE MATERNA ',
              auth: 'Pediatra',
              time: '6:21 min',
              desc: 'El Pediatra nos cuenta por qué es el alimento ideal para tu bebé.',
              src_image: '/sites/default/files/custom-files/nutrientes_de_la_leche_materna.jpg',
              alt: 'El Pediatra nos cuenta por qué es el alimento ideal para tu bebé.',
              nid: '3852475',
              stage: [ 'etapa2' ],
              theme: [ 'lactancia', 'alimentacion' ]
            },
            video7: {
              title: 'LECHE PARA NIÑOS ',
              auth: 'La Nutrióloga ',
              time: '5:30 min',
              desc: 'Descubre todo sobre la leche para los niños de 1 año.',
              src_image: '/sites/default/files/custom-files/leche_para_ninos.jpg',
              alt: 'Descubre todo sobre la leche para los niños de 1 año.',
              nid: '3848405',
              stage: [ 'etapa4' ],
              theme: [ 'desarrollo' ]
            },
            video6: {
              title: 'CAMBIOS EN EL EMBARAZO',
              auth: 'La Ginecóloga Obstetra ',
              time: '9:03 min',
              desc: 'Aquí te explicamos todos los cambios físicos y emocionales en el embarazo.',
              src_image: '/sites/default/files/custom-files/cambios_en_embarazo.jpg',
              alt: 'Aquí te explicamos todos los cambios físicos y emocionales en el embarazo.',
              nid: '3848403',
              stage: [ 'etapa1' ],
              theme: [ 'alimentacion' ]
            },
            video5: {
              title: 'DESARROLLO DEL BEBÉ',
              auth: 'El Pediatra y Nutriólogo',
              time: '5:44 min',
              desc: 'Aquí te explicamos todos los cambios que le suceden en esta hermosa etapa.',
              src_image: '/sites/default/files/custom-files/desarrollo_bebe_durante_embarazo.jpg',
              alt: 'Aquí te explicamos todos los cambios que le suceden en esta hermosa etapa.',
              nid: '3844371',
              stage: [ 'etapa1' ],
              theme: [ 'desarrollo' ]
            },
            video4: {
              title: 'INTOLERANCIA A LA LACTOSA',
              auth: 'El Pediatra y Nutriólogo',
              time: '6:08 min',
              desc: '¿Sabes si tu hijo es intolerante a la lactosa? El Pediatra nos cuenta cómo detectarlo.',
              src_image: '/sites/default/files/custom-files/intolerancia_lactosa.jpg',
              alt: 'Cómo detectar si tu bebé es intolerante a la lactosa',
              nid: '3844370',
              stage: [ 'etapa2', 'etapa3', 'etapa4' ],
              theme: [ 'alimentacion', 'salud', ]
            },

            video3: {
              title: 'PESO Y TALLA',
              auth: 'El Pediatra y Nutriólogo',
              time: '5:15 min',
              desc: 'Aquí podrás conocer todo sobre los factores que intervienen en el peso y talla de tu bebé.',
              src_image: '/sites/default/files/custom-files/pesotalla.png',
              alt: '¿Cómo saber si mi bebé está bien en peso y talla?',
              nid: '3843047',
              stage: [ 'etapa2', 'etapa3', 'etapa4' ],
              theme: [ 'desarrollo', 'alimentacion', ]
            },
            video2: {
              title: 'FORTALECER SUS DEFENSAS',
              auth: 'El Pediatra y Nutriólogo',
              time: '5:24 min',
              desc: 'Conoce cuáles son los factores más importantes para fortalecer las defensas y el sistema inmune de tu hijo por etapa.',
              src_image: '/sites/default/files/custom-files/sistemainmune.png',
              alt: '5 formas de fortalecer el SISTEMA INMUNE de tu pequeño',
              nid: '3843046',
              stage: [ 'etapa4', 'etapa5' ],
              theme: [ 'alimentacion', 'salud', 'desarrollo' ]
            },
            video1: {
              title: 'COMIDA PARA NIÑOS',
              auth: 'La Nutrióloga',
              time: '5:33 min',
              desc: 'En este podcast conocerás 6 tips para la alimentación de tu bebé a partir de esta etapa.',
              src_image: '/sites/default/files/custom-files/comida_ninos_tomar_en_cuenta.jpg',
              alt: '¿Qué debes tomar en cuenta?',
              nid: '3842032',
              stage: [ 'etapa4' ],
              theme: [ 'alimentacion' ]
            },
            video0: {
              title: 'PRIMERAS COMIDAS',
              auth: 'La Nutrióloga',
              time: '4:41 min',
              desc: 'En este podcast conocerás cómo debes integrar los siguientes alimentos, texturas y porciones en la dieta de tu bebé.',
              src_image: '/sites/default/files/custom-files/primeras_comidas_textura.jpg',
              alt: '¿Cómo debe ser su textura y qué alimentos debo darle?',
              nid: '3841782',
              stage: [ 'etapa3' ],
              theme: [ 'alimentacion' ]
            },
      },// end arrayVideonew

      arrayPodcast = {
        podcast9: {
          title: 'CÓLICO, REFLUJO Y ESTREÑIMIENTO',
          desc: 'El Pediatra nos habla acerca de problemas digestivos.',
          frame: 'https://open.spotify.com/embed-podcast/episode/QWERTY',
          url: 'https://open.spotify.com/episode/QWERTY',
          stage: [ 'etapa4' ],
          theme: [ 'salud', 'alimentacion' ]
        },
        podcast8: {
          title: 'LECHE MATERNA',
          desc: 'El Pediatra nos cuenta por qué es el alimento ideal para tu bebé.',
          frame: 'https://open.spotify.com/embed-podcast/episode/QWERTY',
          url: 'https://open.spotify.com/episode/QWERTY',
          stage: [ 'etapa2' ],
          theme: [ 'lactancia', 'alimentacion' ]
        },

        podcast7: {
          title: 'LECHE PARA NIÑOS',
          desc: 'Descubre todo sobre la leche para los niños de 1 año.',
          frame: 'https://open.spotify.com/embed-podcast/episode/QWERTY',
          url: 'https://open.spotify.com/episode/QWERTY',
          stage: [ 'etapa4' ],
          theme: [ 'desarrollo' ]
        },
        podcast6: {
          title: 'CAMBIOS EN EL EMBARAZO',
          desc: 'Aquí te explicamos todos los cambios físicos y emocionales en el embarazo.',
          frame: 'https://open.spotify.com/embed-podcast/episode/QWERTY',
          url: 'https://open.spotify.com/episode/QWERTY',
          stage: [ 'etapa1' ],
          theme: [ 'alimentacion' ]
        },
        podcast5: {
          title: 'DESARROLLO DEL BEBÉ',
          desc: 'Aquí te explicamos todos los cambios que le suceden en esta hermosa etapa.',
          frame: 'https://open.spotify.com/embed-podcast/episode/QWERTY',
          url: 'https://open.spotify.com/episode/QWERTY',
          stage: [ 'etapa1' ],
          theme: [ 'desarrollo' ]
        },
        podcast4: {
          title: 'INTOLERANCIA A LA LACTOSA',
          desc: '¿Sabes si tu hijo es intolerante a la lactosa? El Pediatra nos cuenta cómo detectarlo.',
          frame: 'https://open.spotify.com/embed-podcast/episode/QWERTY',
          url: 'https://open.spotify.com/episode/QWERTY',
          stage: [ 'etapa2', 'etapa3', 'etapa4' ],
          theme: [ 'alimentacion', 'salud', ]
        },

        podcast3: {
          title: 'PESO Y TALLA ',
          desc: 'Aquí podrás conocer todo sobre los factores que intervienen en el peso y talla de tu bebé y su evolución por etapa.',
          frame: 'https://open.spotify.com/embed-podcast/episode/QWERTY',
          url: 'https://open.spotify.com/episode/QWERTY',
          stage: [ 'etapa2', 'etapa3', 'etapa4' ],
          theme: [ 'desarrollo', 'alimentacion', ]
        },
        podcast2: {
          title: 'FORTALECER SUS DEFENSAS',
          desc: 'Aquí podrás conocer cuáles son los factores más importantes para fortalecer las defensas y el sistema inmune de tu hijo por etapa.',
          frame: 'https://open.spotify.com/embed-podcast/episode/QWERTY',
          url: 'https://open.spotify.com/episode/QWERTY',
          stage: [ 'etapa4', 'etapa5' ],
          theme: [ 'alimentacion', 'salud', 'desarrollo' ]
        },
        podcast1: {
          title: 'COMIDA PARA NIÑOS',
          desc: '¿Sabias que los patrones de alimentación de tu bebé cambiarán a partir del primer año de edad? Conoce 6 tips para la alimentación de tu bebé a partir de esta etapa.',
          frame: 'https://open.spotify.com/embed-podcast/episode/QWERTY',
          url: 'https://open.spotify.com/episode/QWERTY',
          stage: [ 'etapa4' ],
          theme: [ 'alimentacion' ]
        },
        podcast0: {
          title: 'PRIMERAS COMIDAS',
          desc: 'En este podcast conocerás cómo debes integrar los siguientes alimentos, texturas y porciones en la dieta de tu bebé.',
          frame: 'https://open.spotify.com/embed-podcast/episode/QWERTY',
          url: 'https://open.spotify.com/episode/QWERTY',
          stage: [ 'etapa3' ],
          theme: [ 'alimentacion' ]
        },
      };

      switch(true) {
        case (type == 'videos' && stage == 'todas' && theme == 'todos'):

          $('#select-item1').html('<div class="stage-selector" id="todas"></div>Todas' );
          $('#select-item2').html('<div class="theme-selector" id="todos"></div><span class="todos"></span>Todos' );
          if($('#select-item2').hasClass('temas-icn')) {
            $('#select-item2').removeClass("temas-icn");
          }

          $.each(arrayVideonew, function(keyVideo, videoItem) {
            armado += '<div class="col-lg-3 col-md-6 col-sm-6 mb-5">'+
                        '<a class="box-href" href="/node/'+videoItem.nid+'">'+
                          '<div class="box-thumb">'+
                            '<div class="box-img position-relative">'+
                            '<span class="play"></span>'+
                            '<img class="img-fluid" src="'+videoItem.src_image+'" alt="'+videoItem.alt+'">'+
                          '</div>'+
                          '<div class="p-4 box-desco">'+
                            '<h4 class="fsize-18 bold blue-content">'+
                              videoItem.title+
                            '</h4>'+
                            '<div class="fsize-16 blue-content">Por '+videoItem.auth+'</div>'+
                            '<div class="fsize-16 orange bold mt-2 mb-2">'+videoItem.time+'</div>'+
                            '<p class="fsize-16 gray">'+
                              videoItem.desc+
                            '</p>'+
                          '</div>'+
                          '<div class="icono-cat mt-2">';

            $.each(videoItem.theme, function(keyTheme, themeName) {
              armado += '<span class="icn '+themeName+'"></span>';
            });

            armado += '</div>'+
                    '</div>'+
                  '</a>'+
                '</div>';
          });

          break;

        case (type == 'videos' && stage != 'todas' && theme == 'todos'):
          var stageText = getText('newselect1', stage);
          $('#select-item1').html('<div class="stage-selector" id="'+stage+'"></div>'+stageText );

          $.each(arrayVideonew, function(keyVideo, videoItem) {
            $.each(videoItem.stage, function(keyItem, stagesItem) {
              if (stagesItem == stage) {
                armado += '<div class="col-lg-3 col-md-6 col-sm-6 mb-5">'+
                            '<a class="box-href" href="/node/'+videoItem.nid+'">'+
                              '<div class="box-thumb">'+
                                '<div class="box-img position-relative">'+
                                '<span class="play"></span>'+
                                '<img class="img-fluid" src="'+videoItem.src_image+'" alt="'+videoItem.alt+'">'+
                              '</div>'+
                              '<div class="p-4 box-desco">'+
                                '<h4 class="fsize-18 bold blue-content">'+
                                  videoItem.title+
                                '</h4>'+
                                '<div class="fsize-16 blue-content">Por '+videoItem.auth+'</div>'+
                                '<div class="fsize-16 orange bold mt-2 mb-2">'+videoItem.time+'</div>'+
                                '<p class="fsize-16 gray">'+
                                  videoItem.desc+
                                '</p>'+
                              '</div>'+
                              '<div class="icono-cat mt-2">';

                $.each(videoItem.theme, function(keyTheme, themeName) {
                  armado += '<span class="icn '+themeName+'"></span>';
                });

                armado += '</div>'+
                        '</div>'+
                      '</a>'+
                    '</div>';

              its++;
              }
            });
          });

          armado = ( its == 0 ) ? '<h4>SIN RESULTADOS</h4>' : armado;

          break;

        case (type == 'videos' && stage == 'todas' && theme != 'todos'):
          var themeText = getText('newselect2', theme);

          $('#select-item2').html('<div class="theme-selector" id="'+theme+'"></div><span class="'+theme+'"></span>'+themeText );
          if($('#select-item2').hasClass('temas-icn')) {
            $('#select-item2').removeClass("temas-icn");
          }

          $.each(arrayVideonew, function(keyVideo, videoItem) {
            $.each(videoItem.theme, function(keyItem, themeItem) {
              if (themeItem == theme) {
                armado += '<div class="col-lg-3 col-md-6 col-sm-6 mb-5">'+
                            '<a class="box-href" href="/node/'+videoItem.nid+'">'+
                              '<div class="box-thumb">'+
                                '<div class="box-img position-relative">'+
                                  '<span class="play"></span>'+
                                  '<img class="img-fluid" src="'+videoItem.src_image+'" alt="'+videoItem.alt+'">'+
                                '</div>'+
                                '<div class="p-4 box-desco">'+
                                  '<h4 class="fsize-18 bold blue-content">'+
                                    videoItem.title+
                                  '</h4>'+
                                  '<div class="fsize-16 blue-content">Por '+videoItem.auth+'</div>'+
                                  '<div class="fsize-16 orange bold mt-2 mb-2">'+videoItem.time+'</div>'+
                                  '<p class="fsize-16 gray">'+
                                    videoItem.desc+
                                  '</p>'+
                                '</div>'+
                                '<div class="icono-cat mt-2">'+
                                  '<span class="icn '+theme+'"></span>'+
                                '</div>'+
                              '</div>'+
                            '</a>'+
                          '</div>';

              its++;
              }
            });
          });

          armado = ( its == 0 ) ? '<h4>SIN RESULTADOS</h4>' : armado;
          break;

        case (type == 'videos' && stage != 'todas' && theme != 'todos'):
          var stageText = getText('newselect1', stage),
              themeText = getText('newselect2', theme),
              stageIn = themeIn = 0;

          $('#select-item1').html('<div class="stage-selector" id="'+stage+'"></div>'+stageText );
          $('#select-item2').html('<div class="theme-selector" id="'+theme+'"></div><span class="'+theme+'"></span>'+themeText );
          if($('#select-item2').hasClass('temas-icn')) {
            $('#select-item2').removeClass("temas-icn");
          }

          $.each(arrayVideonew, function(keyVideo, videoItem) {
            //verified that the stage exists
            $.each(videoItem.stage, function(keyStages, stagesItem) {
              stageIn = (stagesItem == stage) ? 1 : stageIn;
            });

            //verified that the theme exists
            $.each(videoItem.theme, function(keyTheme, themeItem) {
              themeIn = (themeItem == theme) ? 1 : themeIn;
            });

            if (stageIn == 1 && themeIn == 1) {
              its++;
              armado += '<div class="col-lg-3 col-md-6 col-sm-6 mb-5">'+
                          '<a class="box-href" href="/node/'+videoItem.nid+'">'+
                            '<div class="box-thumb">'+
                              '<div class="box-img position-relative">'+
                                '<span class="play"></span>'+
                                '<img class="img-fluid" src="'+videoItem.src_image+'" alt="'+videoItem.alt+'">'+
                              '</div>'+
                              '<div class="p-4 box-desco">'+
                                '<h4 class="fsize-18 bold blue-content">'+
                                  videoItem.title+
                                '</h4>'+
                                '<div class="fsize-16 blue-content">Por '+videoItem.auth+'</div>'+
                                '<div class="fsize-16 orange bold mt-2 mb-2">'+videoItem.time+'</div>'+
                                '<p class="fsize-16 gray">'+
                                  videoItem.desc+
                                '</p>'+
                              '</div>'+
                              '<div class="icono-cat mt-2">'+
                                '<span class="icn '+theme+'"></span>'+
                              '</div>'+
                            '</div>'+
                          '</a>'+
                        '</div>';
            }
            stageIn = 0;
            themeIn = 0;
          });

          armado = ( its == 0 ) ? '<h4>SIN RESULTADOS</h4>' : armado;

          break;

        case (type == 'podcast' && stage == 'todas' && theme == 'todos'):
          $('#select-item1').html('<div class="stage-selector" id="todas"></div>Todas' );
          $('#select-item2').html('<div class="theme-selector" id="todos"></div><span class="todos"></span>Todos' );
          if($('#select-item2').hasClass('temas-icn')) {
            $('#select-item2').removeClass("temas-icn");
          }

          $.each(arrayPodcast, function(keyPodcast, contentItem) {
            armado += '<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-5">'+
                        '<div class="box-thumb pod-box rounded-thumb">'+
                          '<div class="pt-4 pl-4 pr-4 pb-0 pod-desco">'+
                            '<h4 class="fsize-18 bold">'+
                              contentItem.title+
                            '</h4>'+
                            '<p class="fsize-16 gray">'+
                              contentItem.desc+
                            '</p>'+
                          '</div>'+
                          '<div class="icono-cat mt-2 pod-category">';

                          $.each(contentItem.theme, function(keyTheme, themeName) {
                            armado += '<span class="icn '+themeName+'"></span>';
                          });

                armado += '</div>'+
                          '<div class="text-center">'+
                            '<iframe src="'+contentItem.frame+'" width="90%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'+
                          '</div>'+
                          '<div class="pod-text">'+
                            '<a class="pod-href" href="'+contentItem.url+'">Escuchar podcast completo</a>'+
                          '</div>'+
                        '</div>'+
                      '</div>';
          });

          break;

        case (type == 'podcast' && stage != 'todas' && theme == 'todos'):
          var stageText = getText('newselect1', stage);

          $('#select-item1').html('<div class="stage-selector" id="'+stage+'"></div>'+stageText );

          $.each(arrayPodcast, function(keyPodcast, contentItem) {
            $.each(contentItem.stage, function(keyItem, stagesItem) {
              if (stagesItem == stage) {
                armado += '<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-5">'+
                            '<div class="box-thumb pod-box rounded-thumb">'+
                              '<div class="pt-4 pl-4 pr-4 pb-0 pod-desco">'+
                                '<h4 class="fsize-18 bold">'+
                                  contentItem.title+
                                '</h4>'+
                                '<p class="fsize-16 gray">'+
                                  contentItem.desc+
                                '</p>'+
                              '</div>'+
                              '<div class="icono-cat mt-2 pod-category">';

                              $.each(contentItem.theme, function(keyTheme, themeName) {
                                armado += '<span class="icn '+themeName+'"></span>';
                              });

                    armado += '</div>'+
                              '<div class="text-center">'+
                                '<iframe src="'+contentItem.frame+'" width="90%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'+
                              '</div>'+
                              '<div class="pod-text">'+
                                '<a class="pod-href" href="'+contentItem.url+'">Escuchar podcast completo</a>'+
                              '</div>'+
                            '</div>'+
                          '</div>';

                its++;
              }
            });
          });

          armado = ( its == 0 ) ? '<h4>SIN RESULTADOS</h4>' : armado;

          break;

        case (type == 'podcast' && stage == 'todas' && theme != 'todos'):
          var themeText = getText('newselect2', theme);

          $('#select-item2').html('<div class="theme-selector" id="'+theme+'"></div><span class="'+theme+'"></span>'+themeText );
          if($('#select-item2').hasClass('temas-icn')) {
            $('#select-item2').removeClass("temas-icn");
          }



          $.each(arrayPodcast, function(keyPodcast, contentItem) {
            $.each(contentItem.theme, function(keyItem, themeItem) {
              if (themeItem == theme) {

                armado += '<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-5">'+
                            '<div class="box-thumb pod-box rounded-thumb">'+
                              '<div class="pt-4 pl-4 pr-4 pb-0 pod-desco">'+
                                '<h4 class="fsize-18 bold">'+
                                  contentItem.title+
                                '</h4>'+
                                '<p class="fsize-16 gray">'+
                                  contentItem.desc+
                                '</p>'+
                              '</div>'+
                              '<div class="icono-cat mt-2 pod-category">'+
                                '<span class="icn '+theme+'"></span>'+
                              '</div>'+
                              '<div class="text-center">'+
                                '<iframe src="'+contentItem.frame+'" width="90%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'+
                              '</div>'+
                              '<div class="pod-text">'+
                                '<a class="pod-href" href="'+contentItem.url+'">Escuchar podcast completo</a>'+
                              '</div>'+
                            '</div>'+
                          '</div>';

                its++;
              }
            });
          });

          armado = ( its == 0 ) ? '<h4>SIN RESULTADOS</h4>' : armado;

          break;

        case (type == 'podcast' && stage != 'todas' && theme != 'todos'):
          var stageText = getText('newselect1', stage),
              themeText = getText('newselect2', theme),
              stageIn = themeIn = 0;

          $('#select-item1').html('<div class="stage-selector" id="'+stage+'"></div>'+stageText );
          $('#select-item2').html('<div class="theme-selector" id="'+theme+'"></div><span class="'+theme+'"></span>'+themeText );
          if($('#select-item2').hasClass('temas-icn')) {
            $('#select-item2').removeClass("temas-icn");
          }


          $.each(arrayPodcast, function(keyPodcast, contentItem) {
            //verified that the stage exists
            $.each(contentItem.stage, function(keyStages, stagesItem) {
              stageIn = (stagesItem == stage) ? 1 : stageIn;
            });

            //verified that the theme exists
            $.each(contentItem.theme, function(keyTheme, themeItem) {
              themeIn = (themeItem == theme) ? 1 : themeIn;
            });

            if (stageIn == 1 && themeIn == 1) {
              its++;
              armado += '<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-5">'+
                          '<div class="box-thumb pod-box rounded-thumb">'+
                            '<div class="pt-4 pl-4 pr-4 pb-0 pod-desco">'+
                              '<h4 class="fsize-18 bold">'+
                                contentItem.title+
                              '</h4>'+
                              '<p class="fsize-16 gray">'+
                                contentItem.desc+
                              '</p>'+
                            '</div>'+
                            '<div class="icono-cat mt-2 pod-category">'+
                              '<span class="icn '+theme+'"></span>'+
                            '</div>'+
                            '<div class="text-center">'+
                              '<iframe src="'+contentItem.frame+'" width="90%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'+
                            '</div>'+
                            '<div class="pod-text">'+
                              '<a class="pod-href" href="'+contentItem.url+'">Escuchar podcast completo</a>'+
                            '</div>'+
                          '</div>'+
                        '</div>';
            }
            stageIn = 0;
            themeIn = 0;
          });

          armado = ( its == 0 ) ? '<h4>SIN RESULTADOS</h4>' : armado;

          break;

      }// endswitch

      // Animation to hide and display new content
      $('#container-items').hide();
      $('#container-items').empty();
      $('#container-items').append(armado);
      $('#container-items').fadeIn('slow');
    };

  }); //fin de documentready

})(jQuery);
