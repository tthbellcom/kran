VAGRANTFILE_API_VERSION = "2"

Vagrant.require_version ">= 1.5.0"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "yungsang/boot2docker"

  for i in 10000..10900
    config.vm.network :forwarded_port, guest: i, host: i
  end

  config.vm.network "private_network", ip: "192.168.33.10"

  config.vm.synced_folder( ".", "/vagrant", :nfs => true)
end

