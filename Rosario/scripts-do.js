const  rezoOk = document.getElementById('rezo-ok'),
/*
INICIO MISTERIOS DOLOROSOSOS
-----------------------------------------------------
--------------------------------------------*/
      inicioDo = document.getElementById('inicio-do'),
      inicioOracionDo = document.getElementById('inicio-oracion-do'),
      btnCerrarPopupInicioDo = document.getElementById('btn-cerrar-popup-inicio-do'),
      /*INICIO PRIMER MISTERIO DOLOROSO*/
      misterio1Do = document.getElementById('misterio-1-do'),
      misterio1OracionDo = document.getElementById('misterio-1-oracion-do'),
      btnCerrarPopupMisterio1OracionDo = document.getElementById('btn-cerrar-popup-misterio-1-oracion-do'),
      padreNuestroM1Do = document.getElementById('padrenuestro-m1-do'),
      padrenuestroM1OracionDo =document.getElementById('padrenuestro-m1-oracion-do'),
      btnCerrarPopupPadreNuestroM1OracionDo = document.getElementById('btn-cerrar-popup-padrenuestro-m1-oracion-do'),
      avemaria1M1Do = document.getElementById('avemaria-1-m1-do'),
      avemaria1M1OracionDo = document.getElementById('avemaria-1-m1-oracion-do'),
      btnCerrarPopupAvemaria1M1OracionDo = document.getElementById('btn-cerrar-popup-avemaria-1-m1-oracion-do'),
      avemaria2M1Do = document.getElementById('avemaria-2-m1-do'),
      avemaria2M1OracionDo = document.getElementById('avemaria-2-m1-oracion-do'),
      btnCerrarPopupAvemaria2M1OracionDo = document.getElementById('btn-cerrar-popup-avemaria-2-m1-oracion-do'),
      avemaria3M1Do = document.getElementById('avemaria-3-m1-do'),
      avemaria3M1OracionDo = document.getElementById('avemaria-3-m1-oracion-do'),
      btnCerrarPopupAvemaria3M1OracionDo = document.getElementById('btn-cerrar-popup-avemaria-3-m1-oracion-do'),
      avemaria4M1Do = document.getElementById('avemaria-4-m1-do'),
      avemaria4M1OracionDo = document.getElementById('avemaria-4-m1-oracion-do'),
      btnCerrarPopupAvemaria4M1OracionDo = document.getElementById('btn-cerrar-popup-avemaria-4-m1-oracion-do'),
      avemaria5M1Do = document.getElementById('avemaria-5-m1-do'),
      avemaria5M1OracionDo = document.getElementById('avemaria-5-m1-oracion-do'),
      btnCerrarPopupAvemaria5M1OracionDo = document.getElementById('btn-cerrar-popup-avemaria-5-m1-oracion-do'),
      avemaria6M1Do = document.getElementById('avemaria-6-m1-do'),
      avemaria6M1OracionDo = document.getElementById('avemaria-6-m1-oracion-do'),
      btnCerrarPopupAvemaria6M1OracionDo = document.getElementById('btn-cerrar-popup-avemaria-6-m1-oracion-do'),
      avemaria7M1Do = document.getElementById('avemaria-7-m1-do'),
      avemaria7M1OracionDo = document.getElementById('avemaria-7-m1-oracion-do'),
      btnCerrarPopupAvemaria7M1OracionDo = document.getElementById('btn-cerrar-popup-avemaria-7-m1-oracion-do'),
      avemaria8M1Do = document.getElementById('avemaria-8-m1-do'),
      avemaria8M1OracionDo = document.getElementById('avemaria-8-m1-oracion-do'),
      btnCerrarPopupAvemaria8M1OracionDo = document.getElementById('btn-cerrar-popup-avemaria-8-m1-oracion-do'),
      avemaria9M1Do = document.getElementById('avemaria-9-m1-do'),
      avemaria9M1OracionDo = document.getElementById('avemaria-9-m1-oracion-do'),
      btnCerrarPopupAvemaria9M1OracionDo = document.getElementById('btn-cerrar-popup-avemaria-9-m1-oracion-do'),
      avemaria10M1Do = document.getElementById('avemaria-10-m1-do'),
      avemaria10M1OracionDo = document.getElementById('avemaria-10-m1-oracion-do'),
      btnCerrarPopupAvemaria10M1OracionDo = document.getElementById('btn-cerrar-popup-avemaria-10-m1-oracion-do'),
      gloriaM1Do = document.getElementById('gloria-m1-do'),
      gloriaM1OracionDo = document.getElementById('gloria-m1-oracion-do'),
      btnCerrarPopupGloriaM1OracionDo = document.getElementById('btn-cerrar-popup-gloria-m1-oracion-do'),
      /*FIN PRIMER MISTERIO DOLOROSO*/
      /*INICIO SEGUNDO MISTERIO DOLOROSO*/ 
      misterio2Do = document.getElementById('misterio-2-do'),
      misterio2OracionDo = document.getElementById('misterio-2-oracion-do'),
      btnCerrarPopupMisterio2OracionDo = document.getElementById('btn-cerrar-popup-misterio-2-oracion-do'),
      padreNuestroM2Do = document.getElementById('padrenuestro-m2-do'),
      padrenuestroM2OracionDo =document.getElementById('padrenuestro-m2-oracion-do'),
      btnCerrarPopupPadreNuestroM2OracionDo = document.getElementById('btn-cerrar-popup-padrenuestro-m2-oracion-do'),
      avemaria1M2Do = document.getElementById('avemaria-1-m2-do'),
      avemaria1M2OracionDo = document.getElementById('avemaria-1-m2-oracion-do'),
      btnCerrarPopupAvemaria1M2OracionDo = document.getElementById('avemaria-1-m2-oracion-do'),
      avemaria2M2Do = document.getElementById('avemaria-2-m2-do'),
      avemaria2M2OracionDo = document.getElementById('avemaria-2-m2-oracion-do'),
      btnCerrarPopupAvemaria2M2OracionDo = document.getElementById('btn-cerrar-popup-avemaria-2-m2-oracion-do'),
      avemaria3M2Do = document.getElementById('avemaria-3-m2-do'),
      avemaria3M2OracionDo = document.getElementById('avemaria-3-m2-oracion-do'),
      btnCerrarPopupAvemaria3M2OracionDo = document.getElementById('btn-cerrar-popup-avemaria-3-m2-oracion-do'),
      avemaria4M2Do = document.getElementById('avemaria-4-m2-do'),
      avemaria4M2OracionDo = document.getElementById('avemaria-4-m2-oracion-do'),
      btnCerrarPopupAvemaria4M2OracionDo = document.getElementById('btn-cerrar-popup-avemaria-4-m2-oracion-do'),
      avemaria5M2Do = document.getElementById('avemaria-5-m2-do'),
      avemaria5M2OracionDo = document.getElementById('avemaria-5-m2-oracion-do'),
      btnCerrarPopupAvemaria5M2OracionDo = document.getElementById('btn-cerrar-popup-avemaria-5-m2-oracion-do'),
      avemaria6M2Do = document.getElementById('avemaria-6-m2-do'),
      avemaria6M2OracionDo = document.getElementById('avemaria-6-m2-oracion-do'),
      btnCerrarPopupAvemaria6M2OracionDo = document.getElementById('btn-cerrar-popup-avemaria-6-m2-oracion-do'),
      avemaria7M2Do = document.getElementById('avemaria-7-m2-do'),
      avemaria7M2OracionDo = document.getElementById('avemaria-7-m2-oracion-do'),
      btnCerrarPopupAvemaria7M2OracionDo = document.getElementById('btn-cerrar-popup-avemaria-7-m2-oracion-do'),
      avemaria8M2Do = document.getElementById('avemaria-8-m2-do'),
      avemaria8M2OracionDo = document.getElementById('avemaria-8-m2-oracion-do'),
      btnCerrarPopupAvemaria8M2OracionDo = document.getElementById('btn-cerrar-popup-avemaria-8-m2-oracion-do'),
      avemaria9M2Do = document.getElementById('avemaria-9-m2-do'),
      avemaria9M2OracionDo = document.getElementById('avemaria-9-m2-oracion-do'),
      btnCerrarPopupAvemaria9M2OracionDo = document.getElementById('btn-cerrar-popup-avemaria-9-m2-oracion-do'),
      avemaria10M2Do = document.getElementById('avemaria-10-m2-do'), 
      avemaria10M2OracionDo = document.getElementById('avemaria-10-m2-oracion-do'),
      btnCerrarPopupAvemaria10M2OracionDo = document.getElementById('btn-cerrar-popup-avemaria-10-m2-oracion-do'),
      gloriaM2Do = document.getElementById('gloria-m2-do'),
      gloriaM2OracionDo = document.getElementById('gloria-m2-oracion-do'),
      btnCerrarPopupGloriaM2OracionDo = document.getElementById('btn-cerrar-popup-gloria-m2-oracion-do'),
      /*FIN DEL SEGUNDO MISTERIO DOLOROSO*/
      /*INICIO TERCER MISTERIO DOLOROSO*/ 
      misterio3Do = document.getElementById('misterio-3-do'),
      misterio3OracionDo = document.getElementById('misterio-3-oracion-do'),
      btnCerrarPopupMisterio3OracionDo = document.getElementById('btn-cerrar-popup-misterio-3-oracion-do'),
      padreNuestroM3Do = document.getElementById('padrenuestro-m3-do'),
      padrenuestroM3OracionDo =document.getElementById('padrenuestro-m3-oracion-do'),
      btnCerrarPopupPadreNuestroM3OracionDo = document.getElementById('btn-cerrar-popup-padrenuestro-m3-oracion-do'),
      avemaria1M3Do = document.getElementById('avemaria-1-m3-do'),
      avemaria1M3OracionDo = document.getElementById('avemaria-1-m3-oracion-do'),
      btnCerrarPopupAvemaria1M3OracionDo = document.getElementById('avemaria-1-m3-oracion-do'),
      avemaria2M3Do = document.getElementById('avemaria-2-m3-do'),
      avemaria2M3OracionDo = document.getElementById('avemaria-2-m3-oracion-do'),
      btnCerrarPopupAvemaria2M3OracionDo = document.getElementById('btn-cerrar-popup-avemaria-2-m3-oracion-do'),
      avemaria3M3Do = document.getElementById('avemaria-3-m3-do'),
      avemaria3M3OracionDo = document.getElementById('avemaria-3-m3-oracion-do'),
      btnCerrarPopupAvemaria3M3OracionDo = document.getElementById('btn-cerrar-popup-avemaria-3-m3-oracion-do'),
      avemaria4M3Do = document.getElementById('avemaria-4-m3-do'),
      avemaria4M3OracionDo = document.getElementById('avemaria-4-m3-oracion-do'),
      btnCerrarPopupAvemaria4M3OracionDo = document.getElementById('btn-cerrar-popup-avemaria-4-m3-oracion-do'),
      avemaria5M3Do = document.getElementById('avemaria-5-m3-do'),
      avemaria5M3OracionDo = document.getElementById('avemaria-5-m3-oracion-do'),
      btnCerrarPopupAvemaria5M3OracionDo = document.getElementById('btn-cerrar-popup-avemaria-5-m3-oracion-do'),
      avemaria6M3Do = document.getElementById('avemaria-6-m3-do'),
      avemaria6M3OracionDo = document.getElementById('avemaria-6-m3-oracion-do'),
      btnCerrarPopupAvemaria6M3OracionDo = document.getElementById('btn-cerrar-popup-avemaria-6-m3-oracion-do'),
      avemaria7M3Do = document.getElementById('avemaria-7-m3-do'),
      avemaria7M3OracionDo = document.getElementById('avemaria-7-m3-oracion-do'),
      btnCerrarPopupAvemaria7M3OracionDo = document.getElementById('btn-cerrar-popup-avemaria-7-m3-oracion-do'),
      avemaria8M3Do = document.getElementById('avemaria-8-m3-do'),
      avemaria8M3OracionDo = document.getElementById('avemaria-8-m3-oracion-do'),
      btnCerrarPopupAvemaria8M3OracionDo = document.getElementById('btn-cerrar-popup-avemaria-8-m3-oracion-do'),
      avemaria9M3Do = document.getElementById('avemaria-9-m3-do'),
      avemaria9M3OracionDo = document.getElementById('avemaria-9-m3-oracion-do'),
      btnCerrarPopupAvemaria9M3OracionDo = document.getElementById('btn-cerrar-popup-avemaria-9-m3-oracion-do'),
      avemaria10M3Do = document.getElementById('avemaria-10-m3-do'), 
      avemaria10M3OracionDo = document.getElementById('avemaria-10-m3-oracion-do'),
      btnCerrarPopupAvemaria10M3OracionDo = document.getElementById('btn-cerrar-popup-avemaria-10-m3-oracion-do'),
      gloriaM3Do = document.getElementById('gloria-m3-do'),
      gloriaM3OracionDo = document.getElementById('gloria-m3-oracion-do'),
      btnCerrarPopupGloriaM3OracionDo = document.getElementById('btn-cerrar-popup-gloria-m3-oracion-do'),
      /*FIN DEL TERCER MISTERIO DOLOROSO*/
      /*INICIO CUARTO MISTERIO DOLOROSO*/ 
      misterio4Do = document.getElementById('misterio-4-do'),
      misterio4OracionDo = document.getElementById('misterio-4-oracion-do'),
      btnCerrarPopupMisterio4OracionDo = document.getElementById('btn-cerrar-popup-misterio-4-oracion-do'),
      padreNuestroM4Do = document.getElementById('padrenuestro-m4-do'),
      padrenuestroM4OracionDo =document.getElementById('padrenuestro-m4-oracion-do'),
      btnCerrarPopupPadreNuestroM4OracionDo = document.getElementById('btn-cerrar-popup-padrenuestro-m4-oracion-do'),
      avemaria1M4Do = document.getElementById('avemaria-1-m4-do'),
      avemaria1M4OracionDo = document.getElementById('avemaria-1-m4-oracion-do'),
      btnCerrarPopupAvemaria1M4OracionDo = document.getElementById('avemaria-1-m4-oracion-do'),
      avemaria2M4Do = document.getElementById('avemaria-2-m4-do'),
      avemaria2M4OracionDo = document.getElementById('avemaria-2-m4-oracion-do'),
      btnCerrarPopupAvemaria2M4OracionDo = document.getElementById('btn-cerrar-popup-avemaria-2-m4-oracion-do'),
      avemaria3M4Do = document.getElementById('avemaria-3-m4-do'),
      avemaria3M4OracionDo = document.getElementById('avemaria-3-m4-oracion-do'),
      btnCerrarPopupAvemaria3M4OracionDo = document.getElementById('btn-cerrar-popup-avemaria-3-m4-oracion-do'),
      avemaria4M4Do = document.getElementById('avemaria-4-m4-do'),
      avemaria4M4OracionDo = document.getElementById('avemaria-4-m4-oracion-do'),
      btnCerrarPopupAvemaria4M4OracionDo = document.getElementById('btn-cerrar-popup-avemaria-4-m4-oracion-do'),
      avemaria5M4Do = document.getElementById('avemaria-5-m4-do'),
      avemaria5M4OracionDo = document.getElementById('avemaria-5-m4-oracion-do'),
      btnCerrarPopupAvemaria5M4OracionDo = document.getElementById('btn-cerrar-popup-avemaria-5-m4-oracion-do'),
      avemaria6M4Do = document.getElementById('avemaria-6-m4-do'),
      avemaria6M4OracionDo = document.getElementById('avemaria-6-m4-oracion-do'),
      btnCerrarPopupAvemaria6M4OracionDo = document.getElementById('btn-cerrar-popup-avemaria-6-m4-oracion-do'),
      avemaria7M4Do = document.getElementById('avemaria-7-m4-do'),
      avemaria7M4OracionDo = document.getElementById('avemaria-7-m4-oracion-do'),
      btnCerrarPopupAvemaria7M4OracionDo = document.getElementById('btn-cerrar-popup-avemaria-7-m4-oracion-do'),
      avemaria8M4Do = document.getElementById('avemaria-8-m4-do'),
      avemaria8M4OracionDo = document.getElementById('avemaria-8-m4-oracion-do'),
      btnCerrarPopupAvemaria8M4OracionDo = document.getElementById('btn-cerrar-popup-avemaria-8-m4-oracion-do'),
      avemaria9M4Do = document.getElementById('avemaria-9-m4-do'),
      avemaria9M4OracionDo = document.getElementById('avemaria-9-m4-oracion-do'),
      btnCerrarPopupAvemaria9M4OracionDo = document.getElementById('btn-cerrar-popup-avemaria-9-m4-oracion-do'),
      avemaria10M4Do = document.getElementById('avemaria-10-m4-do'), 
      avemaria10M4OracionDo = document.getElementById('avemaria-10-m4-oracion-do'),
      btnCerrarPopupAvemaria10M4OracionDo = document.getElementById('btn-cerrar-popup-avemaria-10-m4-oracion-do'),
      gloriaM4Do = document.getElementById('gloria-m4-do'),
      gloriaM4OracionDo = document.getElementById('gloria-m4-oracion-do'),
      btnCerrarPopupGloriaM4OracionDo = document.getElementById('btn-cerrar-popup-gloria-m4-oracion-do'),
      /*FIN DEL CUARTO MISTERIO DOLOROSOS*/
       /*INICIO QUINTO MISTERIO DOLOROSOS*/ 
       misterio5Do = document.getElementById('misterio-5-do'),
       misterio5OracionDo = document.getElementById('misterio-5-oracion-do'),
       btnCerrarPopupMisterio5OracionDo = document.getElementById('btn-cerrar-popup-misterio-5-oracion-do'),
       padreNuestroM5Do = document.getElementById('padrenuestro-m5-do'),
       padrenuestroM5OracionDo =document.getElementById('padrenuestro-m5-oracion-do'),
       btnCerrarPopupPadreNuestroM5OracionDo = document.getElementById('btn-cerrar-popup-padrenuestro-m5-oracion-do'),
       avemaria1M5Do = document.getElementById('avemaria-1-m5-do'),
       avemaria1M5OracionDo = document.getElementById('avemaria-1-m5-oracion-do'),
       btnCerrarPopupAvemaria1M5OracionDo = document.getElementById('avemaria-1-m5-oracion-do'),
       avemaria2M5Do = document.getElementById('avemaria-2-m5-do'),
       avemaria2M5OracionDo = document.getElementById('avemaria-2-m5-oracion-do'),
       btnCerrarPopupAvemaria2M5OracionDo = document.getElementById('btn-cerrar-popup-avemaria-2-m5-oracion-do'),
       avemaria3M5Do = document.getElementById('avemaria-3-m5-do'),
       avemaria3M5OracionDo = document.getElementById('avemaria-3-m5-oracion-do'),
       btnCerrarPopupAvemaria3M5OracionDo = document.getElementById('btn-cerrar-popup-avemaria-3-m5-oracion-do'),
       avemaria4M5Do = document.getElementById('avemaria-4-m5-do'),
       avemaria4M5OracionDo = document.getElementById('avemaria-4-m5-oracion-do'),
       btnCerrarPopupAvemaria4M5OracionDo = document.getElementById('btn-cerrar-popup-avemaria-4-m5-oracion-do'),
       avemaria5M5Do = document.getElementById('avemaria-5-m5-do'),
       avemaria5M5OracionDo = document.getElementById('avemaria-5-m5-oracion-do'),
       btnCerrarPopupAvemaria5M5OracionDo = document.getElementById('btn-cerrar-popup-avemaria-5-m5-oracion-do'),
       avemaria6M5Do = document.getElementById('avemaria-6-m5-do'),
       avemaria6M5OracionDo = document.getElementById('avemaria-6-m5-oracion-do'),
       btnCerrarPopupAvemaria6M5OracionDo = document.getElementById('btn-cerrar-popup-avemaria-6-m5-oracion-do'),
       avemaria7M5Do = document.getElementById('avemaria-7-m5-do'),
       avemaria7M5OracionDo = document.getElementById('avemaria-7-m5-oracion-do'),
       btnCerrarPopupAvemaria7M5OracionDo = document.getElementById('btn-cerrar-popup-avemaria-7-m5-oracion-do'),
       avemaria8M5Do = document.getElementById('avemaria-8-m5-do'),
       avemaria8M5OracionDo = document.getElementById('avemaria-8-m5-oracion-do'),
       btnCerrarPopupAvemaria8M5OracionDo = document.getElementById('btn-cerrar-popup-avemaria-8-m5-oracion-do'),
       avemaria9M5Do = document.getElementById('avemaria-9-m5-do'),
       avemaria9M5OracionDo = document.getElementById('avemaria-9-m5-oracion-do'),
       btnCerrarPopupAvemaria9M5OracionDo = document.getElementById('btn-cerrar-popup-avemaria-9-m5-oracion-do'),
       avemaria10M5Do = document.getElementById('avemaria-10-m5-do'), 
       avemaria10M5OracionDo = document.getElementById('avemaria-10-m5-oracion-do'),
       btnCerrarPopupAvemaria10M5OracionDo = document.getElementById('btn-cerrar-popup-avemaria-10-m5-oracion-do'),
       gloriaM5Do = document.getElementById('gloria-m5-do'),
       gloriaM5OracionDo = document.getElementById('gloria-m5-oracion-do'),
       btnCerrarPopupGloriaM5OracionDo = document.getElementById('btn-cerrar-popup-gloria-m5-oracion-do'),    
       /*INICIO ORACIONES FINALES DOLOROSOS*/
       fDo = document.getElementById('f-do'),
       fOracionDo = document.getElementById('f-oracion-do'),
       btnCerrarPopupFOracionDo = document.getElementById('btn-cerrar-popup-f-oracion-do'),
       padreNuestroFDo = document.getElementById('padrenuestro-f-do'),
       padrenuestroFOracionDo =document.getElementById('padrenuestro-f-oracion-do'),
       btnCerrarPopupPadreNuestroFOracionDo = document.getElementById('btn-cerrar-popup-padrenuestro-f-oracion-do'),
       avemaria1FDo = document.getElementById('avemaria-1-f-do'),
       avemaria1FOracionDo = document.getElementById('avemaria-1-f-oracion-do'),
       btnCerrarPopupAvemaria1FOracionDo = document.getElementById('avemaria-1-f-oracion-do'),
       avemaria2FDo = document.getElementById('avemaria-2-f-do'),
       avemaria2FOracionDo = document.getElementById('avemaria-2-f-oracion-do'),
       btnCerrarPopupAvemaria2FOracionDo = document.getElementById('btn-cerrar-popup-avemaria-2-f-oracion-do'),
       avemaria3FDo = document.getElementById('avemaria-3-f-do'),
       avemaria3FOracionDo = document.getElementById('avemaria-3-f-oracion-do'),
       btnCerrarPopupAvemaria3FOracionDo = document.getElementById('btn-cerrar-popup-avemaria-3-f-oracion-do'),
       gloriaFDo = document.getElementById('gloria-f-do'),
       gloriaFOracionDo = document.getElementById('gloria-f-oracion-do'),
       btnCerrarPopupGloriaFOracionDo = document.getElementById('btn-cerrar-popup-gloria-f-oracion-do'),
       salveDo = document.getElementById('salve-do'),
       salveOracionDo = document.getElementById('salve-oracion-do'),
       btnCerrarPopupSalveOracionDo = document.getElementById('btn-cerrar-popup-salve-oracion-do');






       

/*INICIO MISTERIOS DOLOROSOS*/

inicioDo.addEventListener('click', function(){
    inicioDo.classList.add('rezo-ok');
    inicioOracionDo.classList.add('active');
})

btnCerrarPopupInicioDo.addEventListener('click', function(){
    inicioOracionDo.classList.remove('active');
    
})

/*INICIO PRIMER MISTERIO DOLOROSO*/
misterio1Do.addEventListener('click', function(){
    misterio1Do.classList.add('rezo-ok');
    misterio1OracionDo.classList.add('active');
})

btnCerrarPopupMisterio1OracionDo.addEventListener('click', function(){
    misterio1OracionDo.classList.remove('active');
})

padreNuestroM1Do.addEventListener('click', function(){
    padreNuestroM1Do.classList.add('rezo-ok');
    padrenuestroM1OracionDo.classList.add('active');
})

btnCerrarPopupPadreNuestroM1OracionDo.addEventListener('click', function(){
    padrenuestroM1OracionDo.classList.remove('active');
});


avemaria1M1Do.addEventListener('click', function(){
    avemaria1M1Do.classList.add('rezo-ok');
    avemaria1M1OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria1M1OracionDo.addEventListener('click', function(){
    avemaria1M1OracionDo.classList.remove('active');
});

avemaria2M1Do.addEventListener('click', function(){
    avemaria2M1Do.classList.add('rezo-ok');
    avemaria2M1OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria2M1OracionDo.addEventListener('click', function(){
    avemaria2M1OracionDo.classList.remove('active');
});

avemaria3M1Do.addEventListener('click', function(){
    avemaria3M1Do.classList.add('rezo-ok');
    avemaria3M1OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria3M1OracionDo.addEventListener('click', function(){
    avemaria3M1OracionDo.classList.remove('active');
});

avemaria4M1Do.addEventListener('click', function(){
    avemaria4M1Do.classList.add('rezo-ok');
    avemaria4M1OracionDo.classList.add('active'); 
})
btnCerrarPopupAvemaria4M1OracionDo.addEventListener('click', function(){
    avemaria4M1OracionDo.classList.remove('active');
});

avemaria5M1Do.addEventListener('click', function(){
    avemaria5M1Do.classList.add('rezo-ok');
    avemaria5M1OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria5M1OracionDo.addEventListener('click', function(){
    avemaria5M1OracionDo.classList.remove('active');
});

avemaria6M1Do.addEventListener('click', function(){
    avemaria6M1Do.classList.add('rezo-ok');
    avemaria6M1OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria6M1OracionDo.addEventListener('click', function(){
    avemaria6M1OracionDo.classList.remove('active');
});

avemaria7M1Do.addEventListener('click', function(){
    avemaria7M1Do.classList.add('rezo-ok');
    avemaria7M1OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria7M1OracionDo.addEventListener('click', function(){
    avemaria7M1OracionDo.classList.remove('active');
});

avemaria8M1Do.addEventListener('click', function(){
    avemaria8M1Do.classList.add('rezo-ok');
    avemaria8M1OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria8M1OracionDo.addEventListener('click', function(){
    avemaria8M1OracionDo.classList.remove('active');
});

avemaria9M1Do.addEventListener('click', function(){
    avemaria9M1Do.classList.add('rezo-ok');
    avemaria9M1OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria9M1OracionDo.addEventListener('click', function(){
    avemaria9M1OracionDo.classList.remove('active');
});

avemaria10M1Do.addEventListener('click', function(){
    avemaria10M1Do.classList.add('rezo-ok');
    avemaria10M1OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria10M1OracionDo.addEventListener('click', function(){
    avemaria10M1OracionDo.classList.remove('active');
});

gloriaM1Do.addEventListener('click', function(){
    gloriaM1Do.classList.add('rezo-ok');
    gloriaM1OracionDo.classList.add('active');  
})

btnCerrarPopupGloriaM1OracionDo.addEventListener('click', function(){
    gloriaM1OracionDo.classList.remove('active');
});
/*FIN PRIMER MISTERIO DOLOROSO*/


/*INICIO SEGUNDO MISTERIO DOLOROSO*/
misterio2Do.addEventListener('click', function(){
    misterio2Do.classList.add('rezo-ok');
    misterio2OracionDo.classList.add('active');
})

btnCerrarPopupMisterio2OracionDo.addEventListener('click', function(){
    misterio2OracionDo.classList.remove('active');
});

padreNuestroM2Do.addEventListener('click', function(){
    padreNuestroM2Do.classList.add('rezo-ok');
    padrenuestroM2OracionDo.classList.add('active');
})

btnCerrarPopupPadreNuestroM2OracionDo.addEventListener('click', function(){
    padrenuestroM2OracionDo.classList.remove('active');
});

avemaria1M2Do.addEventListener('click', function(){
    avemaria1M2Do.classList.add('rezo-ok');
    avemaria1M2OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria1M2OracionDo.addEventListener('click', function(){
    avemaria1M2OracionDo.classList.remove('active');
});

avemaria2M2Do.addEventListener('click', function(){
    avemaria2M2Do.classList.add('rezo-ok');
    avemaria2M2OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria2M2OracionDo.addEventListener('click', function(){
    avemaria2M2OracionDo.classList.remove('active');
});

avemaria3M2Do.addEventListener('click', function(){
    avemaria3M2Do.classList.add('rezo-ok');
    avemaria3M2OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria3M2OracionDo.addEventListener('click', function(){
    avemaria3M2OracionDo.classList.remove('active');
});

avemaria4M2Do.addEventListener('click', function(){
    avemaria4M2Do.classList.add('rezo-ok');
    avemaria4M2OracionDo.classList.add('active'); 
})

btnCerrarPopupAvemaria4M2OracionDo.addEventListener('click', function(){
    avemaria4M2OracionDo.classList.remove('active');
});

avemaria5M2Do.addEventListener('click', function(){
    avemaria5M2Do.classList.add('rezo-ok');
    avemaria5M2OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria5M2OracionDo.addEventListener('click', function(){
    avemaria5M2OracionDo.classList.remove('active');
});

avemaria6M2Do.addEventListener('click', function(){
    avemaria6M2Do.classList.add('rezo-ok');
    avemaria6M2OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria6M2OracionDo.addEventListener('click', function(){
    avemaria6M2OracionDo.classList.remove('active');
});

avemaria7M2Do.addEventListener('click', function(){
    avemaria7M2Do.classList.add('rezo-ok');
    avemaria7M2OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria7M2OracionDo.addEventListener('click', function(){
    avemaria7M2OracionDo.classList.remove('active');
});

avemaria8M2Do.addEventListener('click', function(){
    avemaria8M2Do.classList.add('rezo-ok');
    avemaria8M2OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria8M2OracionDo.addEventListener('click', function(){
    avemaria8M2OracionDo.classList.remove('active');
});

avemaria9M2Do.addEventListener('click', function(){
    avemaria9M2Do.classList.add('rezo-ok');
    avemaria9M2OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria9M2OracionDo.addEventListener('click', function(){
    avemaria9M2OracionDo.classList.remove('active');
});

avemaria10M2Do.addEventListener('click', function(){
    avemaria10M2Do.classList.add('rezo-ok');
    avemaria10M2OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria10M2OracionDo.addEventListener('click', function(){
    avemaria10M2OracionDo.classList.remove('active');
});

gloriaM2Do.addEventListener('click', function(){
    gloriaM2Do.classList.add('rezo-ok');
    gloriaM2OracionDo.classList.add('active');  
})

btnCerrarPopupGloriaM2OracionDo.addEventListener('click', function(){
    gloriaM2OracionDo.classList.remove('active');
});
/*FIN SEGUNDO MISTERIO DOLOROSO*/




/*INICIO TERCER MISTERIO DOLOROSO*/
misterio3Do.addEventListener('click', function(){
    misterio3Do.classList.add('rezo-ok');
    misterio3OracionDo.classList.add('active');
})

btnCerrarPopupMisterio3OracionDo.addEventListener('click', function(){
    misterio3OracionDo.classList.remove('active');
});

padreNuestroM3Do.addEventListener('click', function(){
    padreNuestroM3Do.classList.add('rezo-ok');
    padrenuestroM3OracionDo.classList.add('active');
})

btnCerrarPopupPadreNuestroM3OracionDo.addEventListener('click', function(){
    padrenuestroM3OracionDo.classList.remove('active');
});

avemaria1M3Do.addEventListener('click', function(){
    avemaria1M3Do.classList.add('rezo-ok');
    avemaria1M3OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria1M3OracionDo.addEventListener('click', function(){
    avemaria1M3OracionDo.classList.remove('active');
});

avemaria2M3Do.addEventListener('click', function(){
    avemaria2M3Do.classList.add('rezo-ok');
    avemaria2M3OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria2M3OracionDo.addEventListener('click', function(){
    avemaria2M3OracionDo.classList.remove('active');
});

avemaria3M3Do.addEventListener('click', function(){
    avemaria3M3Do.classList.add('rezo-ok');
    avemaria3M3OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria3M3OracionDo.addEventListener('click', function(){
    avemaria3M3OracionDo.classList.remove('active');
});


avemaria4M3Do.addEventListener('click', function(){
    avemaria4M3Do.classList.add('rezo-ok');
    avemaria4M3OracionDo.classList.add('active'); 
})

btnCerrarPopupAvemaria4M3OracionDo.addEventListener('click', function(){
    avemaria4M3OracionDo.classList.remove('active');
});

avemaria5M3Do.addEventListener('click', function(){
    avemaria5M3Do.classList.add('rezo-ok');
    avemaria5M3OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria5M3OracionDo.addEventListener('click', function(){
    avemaria5M3OracionDo.classList.remove('active');
});

avemaria6M3Do.addEventListener('click', function(){
    avemaria6M3Do.classList.add('rezo-ok');
    avemaria6M3OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria6M3OracionDo.addEventListener('click', function(){
    avemaria6M3OracionDo.classList.remove('active');
});

avemaria7M3Do.addEventListener('click', function(){
    avemaria7M3Do.classList.add('rezo-ok');
    avemaria7M3OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria7M3OracionDo.addEventListener('click', function(){
    avemaria7M3OracionDo.classList.remove('active');
});

avemaria8M3Do.addEventListener('click', function(){
    avemaria8M3Do.classList.add('rezo-ok');
    avemaria8M3OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria8M3OracionDo.addEventListener('click', function(){
    avemaria8M3OracionDo.classList.remove('active');
});

avemaria9M3Do.addEventListener('click', function(){
    avemaria9M3Do.classList.add('rezo-ok');
    avemaria9M3OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria9M3OracionDo.addEventListener('click', function(){
    avemaria9M3OracionDo.classList.remove('active');
});

avemaria10M3Do.addEventListener('click', function(){
    avemaria10M3Do.classList.add('rezo-ok');
    avemaria10M3OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria10M3OracionDo.addEventListener('click', function(){
    avemaria10M3OracionDo.classList.remove('active');
});

gloriaM3Do.addEventListener('click', function(){
    gloriaM3Do.classList.add('rezo-ok');
    gloriaM3OracionDo.classList.add('active');  
})

btnCerrarPopupGloriaM3OracionDo.addEventListener('click', function(){
    gloriaM3OracionDo.classList.remove('active');
});

/*FIN TERCER MISTERIO DOLOROSO*/




/*INICIO CUARTO MISTERIO DOLOROSO*/
misterio4Do.addEventListener('click', function(){
    misterio4Do.classList.add('rezo-ok');
    misterio4OracionDo.classList.add('active');
})

btnCerrarPopupMisterio4OracionDo.addEventListener('click', function(){
    misterio4OracionDo.classList.remove('active');
});

padreNuestroM4Do.addEventListener('click', function(){
    padreNuestroM4Do.classList.add('rezo-ok');
    padrenuestroM4OracionDo.classList.add('active');
})

btnCerrarPopupPadreNuestroM4OracionDo.addEventListener('click', function(){
    padrenuestroM4OracionDo.classList.remove('active');
});

avemaria1M4Do.addEventListener('click', function(){
    avemaria1M4Do.classList.add('rezo-ok');
    avemaria1M4OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria1M4OracionDo.addEventListener('click', function(){
    avemaria1M4OracionDo.classList.remove('active');
});

avemaria2M4Do.addEventListener('click', function(){
    avemaria2M4Do.classList.add('rezo-ok');
    avemaria2M4OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria2M4OracionDo.addEventListener('click', function(){
    avemaria2M4OracionDo.classList.remove('active');
});

avemaria3M4Do.addEventListener('click', function(){
    avemaria3M4Do.classList.add('rezo-ok');
    avemaria3M4OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria3M4OracionDo.addEventListener('click', function(){
    avemaria3M4OracionDo.classList.remove('active');
});

avemaria4M4Do.addEventListener('click', function(){
    avemaria4M4Do.classList.add('rezo-ok');
    avemaria4M4OracionDo.classList.add('active'); 
})

btnCerrarPopupAvemaria4M4OracionDo.addEventListener('click', function(){
    avemaria4M4OracionDo.classList.remove('active');
});

avemaria5M4Do.addEventListener('click', function(){
    avemaria5M4Do.classList.add('rezo-ok');
    avemaria5M4OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria5M4OracionDo.addEventListener('click', function(){
    avemaria5M4OracionDo.classList.remove('active');
});

avemaria6M4Do.addEventListener('click', function(){
    avemaria6M4Do.classList.add('rezo-ok');
    avemaria6M4OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria6M4OracionDo.addEventListener('click', function(){
    avemaria6M4OracionDo.classList.remove('active');
});

avemaria7M4Do.addEventListener('click', function(){
    avemaria7M4Do.classList.add('rezo-ok');
    avemaria7M4OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria7M4OracionDo.addEventListener('click', function(){
    avemaria7M4OracionDo.classList.remove('active');
});

avemaria8M4Do.addEventListener('click', function(){
    avemaria8M4Do.classList.add('rezo-ok');
    avemaria8M4OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria8M4OracionDo.addEventListener('click', function(){
    avemaria8M4OracionDo.classList.remove('active');
});

avemaria9M4Do.addEventListener('click', function(){
    avemaria9M4Do.classList.add('rezo-ok');
    avemaria9M4OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria9M4OracionDo.addEventListener('click', function(){
    avemaria9M4OracionDo.classList.remove('active');
});

avemaria10M4Do.addEventListener('click', function(){
    avemaria10M4Do.classList.add('rezo-ok');
    avemaria10M4OracionDo.classList.add('active');
});

btnCerrarPopupAvemaria10M4OracionDo.addEventListener('click', function(){
    avemaria10M4OracionDo.classList.remove('active');
});

gloriaM4Do.addEventListener('click', function(){
    gloriaM4Do.classList.add('rezo-ok');
    gloriaM4OracionDo.classList.add('active');  
})

btnCerrarPopupGloriaM4OracionDo.addEventListener('click', function(){
    gloriaM4OracionDo.classList.remove('active');
});

/*FIN CUARTO MISTERIO DOLOROSO*/

/*INICIO QUINTO MISTERIO DOLOROSO*/
misterio5Do.addEventListener('click', function(){
    misterio5Do.classList.add('rezo-ok');
    misterio5OracionDo.classList.add('active');
})

btnCerrarPopupMisterio5OracionDo.addEventListener('click', function(){
    misterio5OracionDo.classList.remove('active');
});

padreNuestroM5Do.addEventListener('click', function(){
    padreNuestroM5Do.classList.add('rezo-ok');
    padrenuestroM5OracionDo.classList.add('active');
})

btnCerrarPopupPadreNuestroM5OracionDo.addEventListener('click', function(){
    padrenuestroM5OracionDo.classList.remove('active');
});

avemaria1M5Do.addEventListener('click', function(){
    avemaria1M5Do.classList.add('rezo-ok');
    avemaria1M5OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria1M5OracionDo.addEventListener('click', function(){
    avemaria1M5OracionDo.classList.remove('active');
});

avemaria2M5Do.addEventListener('click', function(){
    avemaria2M5Do.classList.add('rezo-ok');
    avemaria2M5OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria2M5OracionDo.addEventListener('click', function(){
    avemaria2M5OracionDo.classList.remove('active');
});

avemaria3M5Do.addEventListener('click', function(){
    avemaria3M5Do.classList.add('rezo-ok');
    avemaria3M5OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria3M5OracionDo.addEventListener('click', function(){
    avemaria3M5OracionDo.classList.remove('active');
});

avemaria4M5Do.addEventListener('click', function(){
    avemaria4M5Do.classList.add('rezo-ok');
    avemaria4M5OracionDo.classList.add('active'); 
})

btnCerrarPopupAvemaria4M5OracionDo.addEventListener('click', function(){
    avemaria4M5OracionDo.classList.remove('active');
});

avemaria5M5Do.addEventListener('click', function(){
    avemaria5M5Do.classList.add('rezo-ok');
    avemaria5M5OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria5M5OracionDo.addEventListener('click', function(){
    avemaria5M5OracionDo.classList.remove('active');
});

avemaria6M5Do.addEventListener('click', function(){
    avemaria6M5Do.classList.add('rezo-ok');
    avemaria6M5OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria6M5OracionDo.addEventListener('click', function(){
    avemaria6M5OracionDo.classList.remove('active');
});

avemaria7M5Do.addEventListener('click', function(){
    avemaria7M5Do.classList.add('rezo-ok');
    avemaria7M5OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria7M5OracionDo.addEventListener('click', function(){
    avemaria7M5OracionDo.classList.remove('active');
});

avemaria8M5Do.addEventListener('click', function(){
    avemaria8M5Do.classList.add('rezo-ok');
    avemaria8M5OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria8M5OracionDo.addEventListener('click', function(){
    avemaria8M5OracionDo.classList.remove('active');
});

avemaria9M5Do.addEventListener('click', function(){
    avemaria9M5Do.classList.add('rezo-ok');
    avemaria9M5OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria9M5OracionDo.addEventListener('click', function(){
    avemaria9M5OracionDo.classList.remove('active');
});

avemaria10M5Do.addEventListener('click', function(){
    avemaria10M5Do.classList.add('rezo-ok');
    avemaria10M5OracionDo.classList.add('active');
})

btnCerrarPopupAvemaria10M5OracionDo.addEventListener('click', function(){
    avemaria10M5OracionDo.classList.remove('active');
});

gloriaM5Do.addEventListener('click', function(){
    gloriaM5Do.classList.add('rezo-ok');
    gloriaM5OracionDo.classList.add('active');  
})

btnCerrarPopupGloriaM5OracionDo.addEventListener('click', function(){
    gloriaM5OracionDo.classList.remove('active');
});

/*FIN QUINTO MISTERIO DOLOROSO*/

/*INICIO ORACIONES FINALES DOLOROSOS*/

fDo.addEventListener('click', function(){
    fDo.classList.add('rezo-ok');
    fOracionDo.classList.add('active');
})

btnCerrarPopupFOracionDo.addEventListener('click', function(){
    fOracionDo.classList.remove('active');
});

padreNuestroFDo.addEventListener('click', function(){
    padreNuestroFDo.classList.add('rezo-ok');
    padrenuestroFOracionDo.classList.add('active');
})

btnCerrarPopupPadreNuestroFOracionDo.addEventListener('click', function(){
    padrenuestroFOracionDo.classList.remove('active');
});

avemaria1FDo.addEventListener('click', function(){
    avemaria1FDo.classList.add('rezo-ok');
    avemaria1FOracionDo.classList.add('active');
})

btnCerrarPopupAvemaria1FOracionDo.addEventListener('click', function(){
    avemaria1FOracionDo.classList.remove('active');
});

avemaria2FDo.addEventListener('click', function(){
    avemaria2FDo.classList.add('rezo-ok');
    avemaria2FOracionDo.classList.add('active');
})

btnCerrarPopupAvemaria2FOracionDo.addEventListener('click', function(){
    avemaria2FOracionDo.classList.remove('active');
});

avemaria3FDo.addEventListener('click', function(){
    avemaria3FDo.classList.add('rezo-ok');
    avemaria3FOracionDo.classList.add('active');
})

btnCerrarPopupAvemaria3FOracionDo.addEventListener('click', function(){
    avemaria3FOracionDo.classList.remove('active');
});

gloriaFDo.addEventListener('click', function(){
    gloriaFDo.classList.add('rezo-ok');
    gloriaFOracionDo.classList.add('active');  
})

btnCerrarPopupGloriaFOracionDo.addEventListener('click', function(){
    gloriaFOracionDo.classList.remove('active');
});

salveDo.addEventListener('click', function(){
    salveDo.classList.add('rezo-ok');
    salveOracionDo.classList.add('active');  
})

btnCerrarPopupSalveOracionDo.addEventListener('click', function(){
    salveOracionDo.classList.remove('active');
});