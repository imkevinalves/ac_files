const URLToArray = url => {
  var request = {};
  var pairs = url.substring(url.indexOf('?') + 1).split('&');
  for (var i = 0; i < pairs.length; i++) {
    if (!pairs[i])
      continue;
    var pair = pairs[i].split('=');
    request[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return request;
}

const createInputField = (name, value) => {
  const myInput = document.createElement('input');
  myInput.type = "hidden";
  myInput.name = name
  myInput.value = value
  return myInput;
}

const register_hidden_fields = () => {

  const formArray = Array.from(document.querySelectorAll('form'));

  params = URLToArray( window.location.href);

  formArray.map(f1 => {

    if (params['utm_source']) {
      f1.append(createInputField('field[41]', params['utm_source']));
    }
    if (params['utm_medium']) {
      f1.append(createInputField('field[50]', params['utm_medium']));
    }
    if (params['utm_campaign']) {
      f1.append(createInputField('field[43]', params['utm_campaign']));
    }
    if (params['utm_term']) {
      f1.append(createInputField('field[44]', params['utm_term']));
    }
    if (params['utm_content']) {
      f1.append(createInputField('field[45]', params['utm_content']));
    }

  })
}

window.addEventListener("load", register_hidden_fields)
