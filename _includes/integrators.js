// {% capture containerId %}{{include.containerId}}{% endcapture %}
// {% capture integratorsType %}{{include.type}}{% endcapture %}
// {% capture integrators %}{% include integrators.json %}{% endcapture %}
// {% capture rgn %}{% include rgn.json %}{% endcapture %}

function selectType(type, country) {
  var containerId = "{{ containerId }}";
  var integrators = {{ integrators }};
  var targetContainer = document.getElementById(containerId);
  targetContainer.innerHTML = '';

  if (type == "-- All regions --" && country == "-- All countries --") {
    var integratorsByType = integrators;
  } else
  if (country == "-- All countries --") {
    var integratorsByType = integrators.filter(function (integrator) {
      return integrator.type.includes(type);
    });
  } else {
    var integratorsByType = integrators.filter(function (integrator) {
      return integrator.country.includes(country) || (integrator.country.includes("") && integrator.type.includes(type));
    });
  }
  if (integratorsByType == ""){
  if (document.getElementById('integratorsContainer') != null) {
  document.getElementById('integratorsContainer').id = 'integratorsContainerEmpty';
  }
  $('#integratorsContainerEmpty').html("</br><p>Coming soon</p></br>");
  } else {
  integratorsByType.forEach(function (obj) { targetContainer.appendChild(createBox(obj)) });
  }
}

function createBox(integrator) {
   var box = document.createElement('div');
   box.className = 'integrator-box';

   var titleElement = document.createElement('p');
   titleElement.textContent = integrator.name;
   titleElement.className = 'title';

   box.appendChild(titleElement);

   if (integrator.contact.href){
     var Contact = document.createElement('div');

     var textContact = document.createElement('span');
     textContact.textContent = 'Contact Us: ';

     var linkContact = document.createElement('a');
     if (integrator.contact.href.includes("@")){
     linkContact.href = 'mailto:' + integrator.contact.href + '?subject=Introduction request';
     linkContact.className = 'links';
     }
     linkContact.textContent = integrator.contact.href;
     box.appendChild(Contact);
     Contact.appendChild(textContact);
     Contact.appendChild(linkContact);
   }

   if (integrator.site.href){
     var Site = document.createElement('div');
     var textSite = document.createElement('span');
     textSite.textContent = 'Visit us at: ';

     var linkSite = document.createElement('a');
     var link = integrator.site.href.replace('https://', '').replace('http://', '').replace('www.', '').replace('/', '');
     linkSite.href = 'https://' + link;
     linkSite.textContent = link;
     linkSite.target = integrator.site.target;
     linkSite.className = 'links';
     box.appendChild(Site);
     Site.appendChild(textSite);
     Site.appendChild(linkSite);
   }

   return box;
}

function PushIndex(f) {
  $(function(){
    if ( $(window).width() < 568 ) {
    document.location.href = "/partners/distributors/#Search";
    }
    });
  r = $( "#region option:selected" ).text();
  c = $( "#country option:selected" ).text();
  if (document.getElementById('integratorsContainerEmpty') != null) {
  document.getElementById('integratorsContainerEmpty').id = 'integratorsContainer';
  }
  selectType(r,c);
}

function ajax() {
  var json = {{ rgn }};
  return new Promise(function(res) {
    return res(json);
  });
}
var $selectRegion = $('#region');
var $selectCountry = $('#country');
ajax().then(function(data) {
  $selectRegion.html('');
  $selectRegion.append(data.rgn.map(function (val, key) {
      return '<option id="' + val.region + '" value="' + key + '">' + val.region + '</option>';
  }));
  $selectRegion.on('change', function () {
    var index = $(this).val();
    $selectCountry.empty()
      .append(data.rgn[index].country.map(function (val) {
        return '<option id="' + val.cntr + '">' + val.cntr + '</option>';
    }));
  }).change();
});

function mapSelect(m)
{
    if (document.getElementById('integratorsContainerEmpty') != null) {
    document.getElementById('integratorsContainerEmpty').id = 'integratorsContainer';
    }
    $('#Search').removeAttr('disabled');
    $('#country').removeAttr('disabled');
    document.location.href = "/partners/distributors/#distributors";
    selectType(m,"-- All countries --");
    var optionElement = document.getElementById('region').options.namedItem(m);
    optionElement.selected = 'true';
    ajax().then(function(data) {
        var index = optionElement.value;
                $selectCountry.empty()
                  .append(data.rgn[index].country.map(function (val) {
                    return '<option id="' + val.cntr + '">' + val.cntr + '</option>';
                }));
    });
}

function Empty()
{
    selectType("-- All regions --","-- All countries --");
}
