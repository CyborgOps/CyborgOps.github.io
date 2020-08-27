
  let typer = new TypeIt("#typer", {
    strings: [
      "We've built the phone system your business needs and your customers want. Our human supervised AI reps .<br>",
      "Our technology is easy to deploy, will delight your customers, boost your revenue, shrink your labor costs and make your team safer and more productive.<br>"],
    speed: 50,
    breakLines: true,
    nextStringDelay: 1000
  }).go();

  const promptMap = {
    product: ['Every business that gets a lot of calls knows very well the trade off in answering the call or working on your business. '],
    about: [
      "We build voicebots for businesses, powered by the latest advances in artificial intelligence and managed & trained by our crack team of human operators. <br>",
      "Our technology is easy to deploy, will delight your customers, boost your revenue, shrink your labor costs and make your team safer and more productive.<br>", 
      "We can handle tee times at your <a href='#golf'>golf courses</a>, reservations for your <a href='#hospitality'>hotel rooms</a>, orders for your <a href='#restaurant'>restaurant</a>, appointments at your <a href='#salon'>barbershop</a>, checkup on your patients, conduct phone surveys and we do it over your current phone and web systems.<br>", 
      "If you want your phones to stop ringing, but the business to keep coming, please <a href='#touch'>get in touch</a> and schedule a demo."],
    technology: ["<div class='quote'><i>Consider a future device …  in which an individual stores all his books, records, and communications, and which is mechanized so that it may be consulted with exceeding speed and flexibility. It is an enlarged intimate supplement to his memory.</i> - Vannevar Bush</div><br>", "In a powerful essay that shaped the future, Vannevar Bush, "]
  }

  function typeIt (strings) {
    document.getElementById('typer').innerHTML = '';
    typer.reset();
    typer = new TypeIt("#typer", {
    strings: strings,
    speed: 50,
    breakLines: true,
    nextStringDelay: 1000
    }).go();
  }
  
  window.onhashchange = url => {
    console.log(url.newURL);
    let newHash = url.newURL.split('#')[1];
    typeIt(promptMap[newHash]);
  }