$(document).ready(function() {

    $(".privacy-link").click(function() {
            $("#privacy").css("display", "block");
        }
    )
    $(".btn-close").click(function() {
            $("#privacy").css("display", "none");
        }
    )
    //
    // $(".owl-carousel").owlCarousel({
    //     loop: true,
    // });

    $.getJSON("https://api.ipify.org/?format=json", function(e) {
        window.ip = e.ip
    });

    var url_string = window.location.href
    var url = new URL(url_string);
    var sub_id = url.searchParams.get("sub_id");

    $('form').submit(function(event) {
        event.preventDefault();
        $('button').prop('disabled', true);


        function funcSuccess(result) {
            var json = JSON.parse(result);
            console.log(json);
            if (json['message'] === 'phone') {
                $('button').prop('disabled', false);
                Swal.fire({
                    title:  '<span style="font-size:30px">Введите корректный номер телефона</span>',
                    html: '<span style="font-size:24px">Вы ввели: '+ json['debug'] +'</span>',
                    icon: 'error',
                    confirmButtonText: "Ok",
                })
            }else if (json['success'] === true) {
                $('button').prop('disabled', false);
                ym(90912448,'reachGoal','lead')
                Swal.fire({
                    title:  '<span style="font-size:30px">Заявка на бесплатный доступ подана! Ожидайте звонка оператора</span>',
                    html: '<span style="font-size:24px">Если вы не возьмете трубку, Доступ будет аннулирован</span>',
                    icon: 'success',
                    confirmButtonText: "Я ОЖИДАЮ ЗВОНОК",
                })
            } else {
                Swal.fire({
                    title: '<span style="font-size:30px">Ошибка. Вы превысили максимальное количество попыток получить доступ.</span>',
                    html: '',
                    icon: 'error',
                    confirmButtonText: 'Ok',
                })
            }
        }
        var data = new FormData(this);
        let ip = window.ip;
        data.append('ip', ip);
        data.append('sub_id', sub_id);
        $.ajax({
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            data: data,
            contentType: false,
            dataType: "html",
            cache: false,
            processData: false,
            success: funcSuccess
        });
    });
    $(".btn-scroll, .scroll-to-form").on("click", (function() {
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#scroll_form").offset().top - 100
            }, 500)
        }
    ))
    $('#phone').inputmask({mask: '+7(vvv)-vvv-vvvv',placeholder:'+7(***)-***-****',
        definitions: {
            "v": {
                validator: "[0-9]",
            }
        },})
    $(".header-list__link").click(function(e) {
        e.preventDefault();
        var aid = $(this).attr("href");
        $('html,body').animate({scrollTop: $(aid).offset().top - 100},"linear");
    });

     $('a[href*="#"]').on("click", (function (n) {
        n.preventDefault();
        h.classList.contains("full") && h.classList.remove("full")
    }));
    let n = document.querySelectorAll(".tab__head"),
        d = document.querySelectorAll(".results-list__item-number"),
        i = document.querySelector(".deposit-calculator__input"),
        r = document.querySelector("#deposit-calculator__value"),
        o = document.querySelector("#deposit-calculator__day"),
        s = document.querySelector("#deposit-calculator__mounth"),
        a = document.querySelector("#deposit-calculator__year"), l = .132, u = 3.9, c = 46.8,
        h = document.querySelector(".aside"), f = document.querySelectorAll(".call"),
        p = document.querySelector(".aside-close"), g = document.querySelector(".header-burger");
    document.querySelector(".year").textContent = (new Date).getFullYear(), r.textContent = "$ " + i.value, o.textContent = "$ " + i.value * l, s.textContent = "$ " + i.value * u, a.textContent = "$ " + i.value * c, d.forEach(((e, t) => {
        e.textContent = `${t + 1}.`
    })), f.forEach((t => {
        t.addEventListener("click", (() => {
            if (window.innerWidth > 820) h.classList.add("full"); else {
                let t = h.offsetTop - e;
                window.scrollTo({top: t, behavior: "smooth"})
            }
        }))
    })), p.addEventListener("click", (() => {
        h.classList.remove("full")
    })), g.addEventListener("click", (() => {
        t.classList.toggle("visible")
    })), i.addEventListener("input", (() => {
        let e = i, t = e.value, n = e.max, d = e.min, h = (t - d) / (n - d) * 100;
        e.style.background = `linear-gradient(90deg, #0BD373 ${h}%, transparent ${h}%)`, r.textContent = "$ " + Math.floor(t), o.textContent = "$ " + Math.floor(t * l), s.textContent = "$ " + Math.floor(t * u), a.textContent = "$ " + Math.floor(t * c)
    })), n.forEach((e => {
        e.addEventListener("click", (() => {
            let t = e.querySelector(".tab__head-arrow"), n = e.nextElementSibling;
            n.querySelector(".tab__body-img"), e.classList.contains("open") ? (t.classList.remove("turned"), n.style.height = "0px", n.classList.remove("opened"), e.classList.remove("open")) : (t.classList.add("turned"), n.style.height = n.scrollHeight + 60 + "px", n.classList.add("opened"), e.classList.add("open"))
        }))
    }))

})
