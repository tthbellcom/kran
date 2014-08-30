var sys = require('sys');
var exec = require('child_process').exec;
var state = [];
var args = [];
var option;

// Parse arguments
process.argv.forEach(function(val, index, array) {
  if (val.indexOf('--') != -1 && val.indexOf('=')) {
    var arg = val.split('=');
    key = arg[0].replace('--', '');
    args[key] = arg[1];
  } else {
    option = val;
  }
});

function parse_sites(sites_output, all) {
  sites_array = sites_output.split("\n");

  sites = [];

  for (var i=0; i < sites_array.length; i++) {
    site = sites_array[i].split("\\");

    original = site[0];

    site_parts = site[0].split(".");
    if (site_parts[site_parts.length - 1] == "dk") {
      site_parts[site_parts.length - 1] = args.tld;
    }
    if (site_parts.length == 1) {
      site_parts.push(args.tld);
    }

    site[0] = site_parts.join(".");

    if (all) {
      site.unshift(original);
    }

    if(site[0] && site[1]) {
      sites.push(site);
    }
  }

  return sites;
}

function enable_sites(sites) {
  if (JSON.stringify(state) != JSON.stringify(sites)) {
    for (var i=0; i < sites.length; i++) {
      proxy.register(sites[i][0], sites[i][1]);
    }
  }
  state = sites;
}

function parse_export(error, stdout, stderr) {
  var sites = parse_sites(stdout);
  enable_sites(sites);
}

function show_status(error, stdout, stderr) {
  var sites = parse_sites(stdout, true);

  console.log(rpad("site:", 28) + rpad("state:", 10) + "url:");
  for (var i=0; i < sites.length; i++) {
    site = sites[i][0];
    status = '-';
    url = '-';
    if (sites[i][2]) {
      status = 'running';
      url = 'http://' + sites[i][1];
    }
    console.log(rpad(site, 28) + rpad(status, 10) + url);
  }
}

if (args.tld === undefined) {
  console.log('provide tld');
  process.exit(1);
}

switch (option) {
  case 'status':
    exec("kran export", show_status);
    break;

  default:
    var proxy = require('redbird')({port:80});

    exec("kran export", parse_export);
    setInterval(function() {
      exec("kran export", parse_export);
    }, 6000);
    break;
}

function rpad(str, length) {
  while (str.length < length) {
    str = str + " ";
  }
  return str;
}
