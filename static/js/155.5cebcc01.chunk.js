(this["webpackJsonparthurdayton116.git.io"]=this["webpackJsonparthurdayton116.git.io"]||[]).push([[155],{124:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=s(n(1)),o=s(n(129)),i=s(n(31));function s(e){return e&&e.__esModule?e:{default:e}}var l=(0,o.default)({}),c=l.Provider,p=l.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,o=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["components"]);return r.default.createElement(p,null,(function(t){return r.default.createElement(e,a({components:n||t},o))}))}};var u=function(e){var t=e.components,n=e.children;return r.default.createElement(c,{value:t},n)};u.propTypes={components:i.default.object.isRequired,children:i.default.element.isRequired},t.default=u},125:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},126:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(127);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return o(a).default}});var r=n(124);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return o(r).default}})},127:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(1),i=c(o),s=c(n(128)),l=n(124);function c(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var d={inlineCode:"code",wrapper:"div"},_=function(e){function t(){return p(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,r=e.props,o=void 0===r?{}:r,l=e.children,c=e.components,p=void 0===c?{}:c,u=e.Layout,_=e.layoutProps,m=p[n+"."+t]||p[t]||d[t]||t;return u?((0,s.default)(this,u),i.default.createElement(u,a({components:p},_),i.default.createElement(m,o,l))):i.default.createElement(m,o,l)}}]),t}(o.Component);t.default=(0,l.withMDXComponents)(_)},128:function(e,t,n){"use strict";var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,i=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,p=c&&c(Object);e.exports=function e(t,n,u){if("string"!==typeof n){if(p){var d=c(n);d&&d!==p&&e(t,d,u)}var _=i(n);s&&(_=_.concat(s(n)));for(var m=0;m<_.length;++m){var f=_[m];if(!a[f]&&!r[f]&&(!u||!u[f])){var b=l(n,f);try{o(t,f,b)}catch(w){}}}return t}return t}},129:function(e,t,n){"use strict";t.__esModule=!0;var a=o(n(1)),r=o(n(130));function o(e){return e&&e.__esModule?e:{default:e}}t.default=a.default.createContext||r.default,e.exports=t.default},130:function(e,t,n){"use strict";t.__esModule=!0;var a=n(1),r=(i(a),i(n(31))),o=i(n(131));i(n(132));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function p(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(n,a){e=n,t.forEach((function(t){return t(e,a)}))}}}t.default=function(e,t){var n,i,u="__create-react-context-"+(0,o.default)()+"__",d=function(e){function n(){var t,a;s(this,n);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=a=l(this,e.call.apply(e,[this].concat(o))),a.emitter=p(a.props.value),l(a,t)}return c(n,e),n.prototype.getChildContext=function(){var e;return(e={})[u]=this.emitter,e},n.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n=this.props.value,a=e.value,r=void 0;((o=n)===(i=a)?0!==o||1/o===1/i:o!==o&&i!==i)?r=0:(r="function"===typeof t?t(n,a):1073741823,0!==(r|=0)&&this.emitter.set(e.value,r))}var o,i},n.prototype.render=function(){return this.props.children},n}(a.Component);d.childContextTypes=((n={})[u]=r.default.object.isRequired,n);var _=function(t){function n(){var e,a;s(this,n);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return e=a=l(this,t.call.apply(t,[this].concat(o))),a.state={value:a.getValue()},a.onUpdate=function(e,t){0!==((0|a.observedBits)&t)&&a.setState({value:a.getValue()})},l(a,e)}return c(n,t),n.prototype.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=void 0===t||null===t?1073741823:t},n.prototype.componentDidMount=function(){this.context[u]&&this.context[u].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=void 0===e||null===e?1073741823:e},n.prototype.componentWillUnmount=function(){this.context[u]&&this.context[u].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[u]?this.context[u].get():e},n.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(a.Component);return _.contextTypes=((i={})[u]=r.default.object,i),{Provider:d,Consumer:_}},e.exports=t.default},131:function(e,t,n){"use strict";(function(t){var n="__global_unique_id__";e.exports=function(){return t[n]=(t[n]||0)+1}}).call(this,n(86))},132:function(e,t,n){"use strict";var a=n(133);e.exports=a},133:function(e,t,n){"use strict";function a(e){return function(){return e}}var r=function(){};r.thatReturns=a,r.thatReturnsFalse=a(!1),r.thatReturnsTrue=a(!0),r.thatReturnsNull=a(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},135:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.r(t),n.d(t,"default",(function(){return a}))},180:function(e,t,n){"use strict";var a=n(125);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.vpcRepo=t.introTerraform=t.ipv4AddressPlan=t.cidr=t.endPointPricing=t.vpcEndpoints=t.vpcConcepts=void 0;var r=a(n(135)),o=a(n(1)),i=n(126),s=n(2);const l="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html";t.vpcConcepts=l;const c="https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-services-overview.html";t.vpcEndpoints=c;t.endPointPricing="https://aws.amazon.com/privatelink/pricing/";const p="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing";t.cidr=p;const u="https://network00.com/NetworkTools/IPv4AddressPlanner/";t.ipv4AddressPlan=u;t.introTerraform="https://www.terraform.io/intro/index.html";const d="https://github.com/arthurdayton116/aws-terraform/tree/main/terraform_vpc";t.vpcRepo=d;t.default=e=>{let t=e.components,n=(0,r.default)(e,["components"]);return o.default.createElement(i.MDXTag,{name:"wrapper",components:t},o.default.createElement(i.MDXTag,{name:"h4",components:t},"What is a VPC"),o.default.createElement(i.MDXTag,{name:"p",components:t},"In this post I am going to cover some of the basics of an AWS VPC and show how I deploy one using Terraform"),o.default.createElement("br",null),o.default.createElement(i.MDXTag,{name:"p",components:t},"For some basic terminology we can look at docs from AWS  - ",o.default.createElement(s.Link,{href:l,target:"_blank"},"Amazon VPC Concepts")),o.default.createElement("br",null),o.default.createElement("br",null),o.default.createElement(i.MDXTag,{name:"hr",components:t}),o.default.createElement(i.MDXTag,{name:"p",components:t},"Amazon Virtual Private Cloud (Amazon VPC) enables you to launch AWS resources into a virtual network that you've defined. This virtual network closely resembles a traditional network that you'd operate in your own data center, with the benefits of using the scalable infrastructure of AWS."),o.default.createElement(i.MDXTag,{name:"p",components:t},"The following are the key concepts for VPCs:"),o.default.createElement(i.MDXTag,{name:"ul",components:t},o.default.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},o.default.createElement(i.MDXTag,{name:"p",components:t,parentName:"li"},"Virtual private cloud (VPC) \u2014 A virtual network dedicated to your AWS account."),o.default.createElement(i.MDXTag,{name:"ul",components:t,parentName:"li"},o.default.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"There's no additional charge for using a VPC. There are charges for the following VPC components: Site-to-Site VPN connection, PrivateLink, Traffic Mirroring, and a NAT gateway. For more information, see Amazon VPC Pricing."))),o.default.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},o.default.createElement(i.MDXTag,{name:"p",components:t,parentName:"li"},"Subnet \u2014 A subnet is a range of IP addresses in your VPC. You can launch AWS resources into a specified subnet. Use a public subnet for resources that must be connected to the internet, and a private subnet for resources that won't be connected to the internet .")),o.default.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},o.default.createElement(i.MDXTag,{name:"p",components:t,parentName:"li"},"Route table \u2014 A set of rules, called routes, that are used to determine where network traffic is directed. You can explicitly associate a subnet with a particular route table. Otherwise, the subnet is implicitly associated with the main route table.")),o.default.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},o.default.createElement(i.MDXTag,{name:"p",components:t,parentName:"li"},"Internet gateway \u2014 A gateway that you attach to your VPC to enable communication between resources in your VPC and the internet.")),o.default.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},o.default.createElement(i.MDXTag,{name:"p",components:t,parentName:"li"},"VPC endpoint \u2014 Enables you to privately connect your VPC to supported AWS services and VPC endpoint services powered by PrivateLink without requiring an internet gateway, NAT device, VPN connection, or AWS Direct Connect connection. Instances in your VPC do not require public IP addresses to communicate with resources in the service. Traffic between your VPC and the other service does not leave the Amazon network. For more information, see AWS PrivateLink and VPC endpoints."),o.default.createElement(i.MDXTag,{name:"ul",components:t,parentName:"li"},o.default.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},o.default.createElement(s.Link,{href:c,target:"_blank"},"AWS PrivateLink and VPC endpoints")),o.default.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},o.default.createElement(s.Link,{href:"https://aws.amazon.com/privatelink/pricing/",target:"_blank"},"AWS PrivateLink pricing")))),o.default.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},o.default.createElement(i.MDXTag,{name:"p",components:t,parentName:"li"},"CIDR block \u2014Classless Inter-Domain Routing. An internet protocol address allocation and route aggregation methodology. For more information, see ",o.default.createElement(s.Link,{href:p,target:"_blank"},"Classless Inter-Domain Routing in Wikipedia"),"."))),o.default.createElement(i.MDXTag,{name:"p",components:t},"From Wikipedia -"),o.default.createElement(i.MDXTag,{name:"blockquote",components:t},o.default.createElement(i.MDXTag,{name:"p",components:t,parentName:"blockquote"},"The number of addresses inside a network or subnet may be calculated as 2address length \u2212 prefix length, where address length is 128 for IPv6 and 32 for IPv4. For example, in IPv4, the prefix length /29 gives: 2 ^ 32 \u2212 29 = 2^3 = 8 addresses.")),o.default.createElement(i.MDXTag,{name:"hr",components:t}),o.default.createElement("br",null),o.default.createElement(i.MDXTag,{name:"h4",components:t},"Network Planner"),o.default.createElement(i.MDXTag,{name:"p",components:t},"Looking at Wikipedia we can see CIDR masks that give us a starting point for planning a network"),o.default.createElement(s.Image,{p:4,verticalAlign:"middle",src:n.images.NETWORKCIDR_IMAGE}),o.default.createElement(i.MDXTag,{name:"p",components:t},"To plan out our VPC we will use a network planner tool - ",o.default.createElement(s.Link,{href:u,target:"_blank"},"IPv4 Address Planner")),o.default.createElement("br",null),o.default.createElement(i.MDXTag,{name:"p",components:t},"We will give our VPC a 19 mask (2^32-19 = 2^13 = 8,092 addresses) and assume a uniform subnet size of 24 (2^32-24 = 2^8 = 256 addresses) which will give us room for 20 subnets in our VPC as shown by this plan:"),o.default.createElement(s.Image,{p:4,verticalAlign:"middle",src:n.images.NETWORKPLAN_19_IMAGE}),o.default.createElement(i.MDXTag,{name:"p",components:t},"We will use this information to construct a VPC that looks like this:"),o.default.createElement(s.Image,{p:4,verticalAlign:"middle",src:n.images.AWS_VPC_IMAGE}),o.default.createElement(i.MDXTag,{name:"p",components:t},"Now we can begin to create out resource definitions in ",o.default.createElement(s.Link,{href:"https://www.terraform.io/intro/index.html",target:"_blank"},"Terraform")," working from the outside in of our diagram."),o.default.createElement("br",null),o.default.createElement(s.Link,{p:4,href:d,target:"_blank"},"Code located here"),o.default.createElement("br",null),o.default.createElement("br",null),o.default.createElement(i.MDXTag,{name:"p",components:t},"The Region is defined by the provider"),o.default.createElement(i.MDXTag,{name:"pre",components:t},o.default.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-json",metaString:""}},'provider "aws" {\n  region = "us-west-2"\n}\n')),o.default.createElement(i.MDXTag,{name:"p",components:t},"We will use terraform to manage our default route table that comes with our vpc and define a separate one for our public subnet.  We create a route in our main route table for our nat gateway and create a route for our internet gateway for our public subnet."),o.default.createElement(i.MDXTag,{name:"pre",components:t},o.default.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-json",metaString:""}},'## Create main route table\nresource "aws_default_route_table" "main" {\n  default_route_table_id = aws_vpc.vpc.default_route_table_id\n  route {\n    cidr_block     = "0.0.0.0/0"\n    nat_gateway_id = aws_nat_gateway.i.id\n  }\n\n  tags = merge(\n    var.base_tags,\n    {\n      Name = "${var.resource_prefix}-main-rt"\n    },\n  )\n}\n\n## Create route table\nresource "aws_route_table" "i_public" {\n  vpc_id = aws_vpc.vpc.id\n  route {\n    cidr_block = "0.0.0.0/0"\n    gateway_id = aws_internet_gateway.igw.id\n  }\n  tags = merge(\n    var.base_tags,\n    {\n      Name = "${var.resource_prefix}-rt"\n    },\n  )\n}\n\n## Associate route tables with subnets\nresource "aws_route_table_association" "i_subnet_private" {\n  subnet_id      = aws_subnet.subnet_private.id\n  route_table_id = aws_default_route_table.main.id\n}\n\nresource "aws_route_table_association" "i_subnet_public" {\n  subnet_id      = aws_subnet.subnet_public.id\n  route_table_id = aws_route_table.i_public.id\n}\n')),o.default.createElement(i.MDXTag,{name:"p",components:t},"The VPC is defined by the aws_vpc resource using a variable to pass in the cidr block"),o.default.createElement(i.MDXTag,{name:"pre",components:t},o.default.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-json",metaString:""}},'## Create vpc\nresource "aws_vpc" "vpc" {\n  cidr_block           = var.cidr_vpc\n  instance_tenancy     = "default"\n  enable_dns_support   = true\n  enable_dns_hostnames = true\n\n  tags = merge(\n    var.base_tags,\n    {\n      Name = "${var.resource_prefix}-vpc"\n    },\n  )\n}\n')),o.default.createElement(i.MDXTag,{name:"p",components:t},"We attach an internet gateway to the VPC with the aws_internet_gateway resource using the vpc id"),o.default.createElement(i.MDXTag,{name:"pre",components:t},o.default.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-json",metaString:""}},'## Create internet gateway\nresource "aws_internet_gateway" "igw" {\n  vpc_id = aws_vpc.vpc.id\n  tags = merge(\n    var.base_tags,\n    {\n      Name = "${var.resource_prefix}-igw"\n    },\n  )\n}\n')),o.default.createElement(i.MDXTag,{name:"p",components:t},"Then we define a nat gateway to allow our private subnet instances to egress to the internet"),o.default.createElement(i.MDXTag,{name:"pre",components:t},o.default.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-json",metaString:""}},'resource "aws_nat_gateway" "i" {\n  allocation_id = aws_eip.i.id\n  subnet_id     = aws_subnet.subnet_public.id\n\n  tags = merge(\n    var.base_tags,\n    {\n      Name = "${var.resource_prefix}-natgw"\n    },\n  )\n}\n\nresource "aws_eip" "i" {\n  vpc = true\n  tags = merge(\n    var.base_tags,\n    {\n      Name = "${var.resource_prefix}-eip"\n    },\n  )\n}\n')),o.default.createElement(i.MDXTag,{name:"p",components:t},"We can then create our private and public subnets using the aws_subnet resource and again using variables for the subnet cidr blocks and availability zones"),o.default.createElement(i.MDXTag,{name:"pre",components:t},o.default.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-json",metaString:""}},'## Create public subnet\nresource "aws_subnet" "subnet_public" {\n  vpc_id                  = aws_vpc.vpc.id\n  cidr_block              = var.cidr_subnet_public\n  map_public_ip_on_launch = "true"\n  availability_zone       = var.availability_zone\n  tags = merge(\n    var.base_tags,\n    {\n      Name   = "${var.resource_prefix}-vpc-subnet-public"\n      Access = "public"\n    },\n  )\n}\n\n## Create private subnet\nresource "aws_subnet" "subnet_private" {\n  vpc_id                  = aws_vpc.vpc.id\n  cidr_block              = var.cidr_subnet_private\n  map_public_ip_on_launch = "false"\n  availability_zone       = var.availability_zone\n  tags = merge(\n    var.base_tags,\n    {\n      Name   = "${var.resource_prefix}-vpc-subnet-private"\n      Access = "private"\n    },\n  )\n}\n')),o.default.createElement(i.MDXTag,{name:"p",components:t},"Within our terraform directory"),o.default.createElement(s.Image,{p:4,verticalAlign:"middle",src:n.images.VPC_FOLDER_IMAGE}),o.default.createElement(i.MDXTag,{name:"p",components:t},"We run terraform init to generate our local state"),o.default.createElement(s.Image,{p:4,verticalAlign:"middle",src:n.images.VPC_FOLDER2_IMAGE}),o.default.createElement(i.MDXTag,{name:"p",components:t},"Then we can run a plan to see what will be created"),o.default.createElement(i.MDXTag,{name:"pre",components:t},o.default.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{metaString:null}},'terraform plan\n\nAn execution plan has been generated and is shown below.\nResource actions are indicated with the following symbols:\n  + create\n\nTerraform will perform the following actions:\n\n  # aws_default_route_table.main will be created\n  + resource "aws_default_route_table" "main" {\n      + default_route_table_id = (known after apply)\n      + id                     = (known after apply)\n      + owner_id               = (known after apply)\n      + route                  = [\n          + {\n              + cidr_block                = "0.0.0.0/0"\n              + egress_only_gateway_id    = ""\n              + gateway_id                = ""\n              + instance_id               = ""\n              + ipv6_cidr_block           = ""\n              + nat_gateway_id            = (known after apply)\n              + network_interface_id      = ""\n              + transit_gateway_id        = ""\n              + vpc_endpoint_id           = ""\n              + vpc_peering_connection_id = ""\n            },\n        ]\n      + tags                   = {\n          + "Name"      = "sample_company-main-rt"\n          + "createdBy" = "terraform"\n          + "directory" = "terraform_vpc"\n          + "owner"     = "Sample Company"\n        }\n      + vpc_id                 = (known after apply)\n    }\n\n  # aws_eip.i will be created\n  + resource "aws_eip" "i" {\n      + allocation_id        = (known after apply)\n      + association_id       = (known after apply)\n      + carrier_ip           = (known after apply)\n      + customer_owned_ip    = (known after apply)\n      + domain               = (known after apply)\n      + id                   = (known after apply)\n      + instance             = (known after apply)\n      + network_border_group = (known after apply)\n      + network_interface    = (known after apply)\n      + private_dns          = (known after apply)\n      + private_ip           = (known after apply)\n      + public_dns           = (known after apply)\n      + public_ip            = (known after apply)\n      + public_ipv4_pool     = (known after apply)\n      + tags                 = {\n          + "Name"      = "sample_company-eip"\n          + "createdBy" = "terraform"\n          + "directory" = "terraform_vpc"\n          + "owner"     = "Sample Company"\n        }\n      + vpc                  = true\n    }\n\n  # aws_internet_gateway.igw will be created\n  + resource "aws_internet_gateway" "igw" {\n      + arn      = (known after apply)\n      + id       = (known after apply)\n      + owner_id = (known after apply)\n      + tags     = {\n          + "Name"      = "sample_company-igw"\n          + "createdBy" = "terraform"\n          + "directory" = "terraform_vpc"\n          + "owner"     = "Sample Company"\n        }\n      + vpc_id   = (known after apply)\n    }\n\n  # aws_nat_gateway.i will be created\n  + resource "aws_nat_gateway" "i" {\n      + allocation_id        = (known after apply)\n      + id                   = (known after apply)\n      + network_interface_id = (known after apply)\n      + private_ip           = (known after apply)\n      + public_ip            = (known after apply)\n      + subnet_id            = (known after apply)\n      + tags                 = {\n          + "Name"      = "sample_company-natgw"\n          + "createdBy" = "terraform"\n          + "directory" = "terraform_vpc"\n          + "owner"     = "Sample Company"\n        }\n    }\n\n  # aws_route_table.i_public will be created\n  + resource "aws_route_table" "i_public" {\n      + id               = (known after apply)\n      + owner_id         = (known after apply)\n      + propagating_vgws = (known after apply)\n      + route            = [\n          + {\n              + cidr_block                = "0.0.0.0/0"\n              + egress_only_gateway_id    = ""\n              + gateway_id                = (known after apply)\n              + instance_id               = ""\n              + ipv6_cidr_block           = ""\n              + local_gateway_id          = ""\n              + nat_gateway_id            = ""\n              + network_interface_id      = ""\n              + transit_gateway_id        = ""\n              + vpc_endpoint_id           = ""\n              + vpc_peering_connection_id = ""\n            },\n        ]\n      + tags             = {\n          + "Name"      = "sample_company-rt"\n          + "createdBy" = "terraform"\n          + "directory" = "terraform_vpc"\n          + "owner"     = "Sample Company"\n        }\n      + vpc_id           = (known after apply)\n    }\n\n  # aws_route_table_association.i_subnet_private will be created\n  + resource "aws_route_table_association" "i_subnet_private" {\n      + id             = (known after apply)\n      + route_table_id = (known after apply)\n      + subnet_id      = (known after apply)\n    }\n\n  # aws_route_table_association.i_subnet_public will be created\n  + resource "aws_route_table_association" "i_subnet_public" {\n      + id             = (known after apply)\n      + route_table_id = (known after apply)\n      + subnet_id      = (known after apply)\n    }\n\n  # aws_subnet.subnet_private will be created\n  + resource "aws_subnet" "subnet_private" {\n      + arn                             = (known after apply)\n      + assign_ipv6_address_on_creation = false\n      + availability_zone               = "us-west-2a"\n      + availability_zone_id            = (known after apply)\n      + cidr_block                      = "10.1.1.0/24"\n      + id                              = (known after apply)\n      + ipv6_cidr_block_association_id  = (known after apply)\n      + map_public_ip_on_launch         = false\n      + owner_id                        = (known after apply)\n      + tags                            = {\n          + "Access"    = "private"\n          + "Name"      = "sample_company-vpc-subnet-private"\n          + "createdBy" = "terraform"\n          + "directory" = "terraform_vpc"\n          + "owner"     = "Sample Company"\n        }\n      + vpc_id                          = (known after apply)\n    }\n\n  # aws_subnet.subnet_public will be created\n  + resource "aws_subnet" "subnet_public" {\n      + arn                             = (known after apply)\n      + assign_ipv6_address_on_creation = false\n      + availability_zone               = "us-west-2a"\n      + availability_zone_id            = (known after apply)\n      + cidr_block                      = "10.1.0.0/24"\n      + id                              = (known after apply)\n      + ipv6_cidr_block_association_id  = (known after apply)\n      + map_public_ip_on_launch         = true\n      + owner_id                        = (known after apply)\n      + tags                            = {\n          + "Access"    = "public"\n          + "Name"      = "sample_company-vpc-subnet-public"\n          + "createdBy" = "terraform"\n          + "directory" = "terraform_vpc"\n          + "owner"     = "Sample Company"\n        }\n      + vpc_id                          = (known after apply)\n    }\n\n  # aws_vpc.vpc will be created\n  + resource "aws_vpc" "vpc" {\n      + arn                              = (known after apply)\n      + assign_generated_ipv6_cidr_block = false\n      + cidr_block                       = "10.1.0.0/19"\n      + default_network_acl_id           = (known after apply)\n      + default_route_table_id           = (known after apply)\n      + default_security_group_id        = (known after apply)\n      + dhcp_options_id                  = (known after apply)\n      + enable_classiclink               = (known after apply)\n      + enable_classiclink_dns_support   = (known after apply)\n      + enable_dns_hostnames             = true\n      + enable_dns_support               = true\n      + id                               = (known after apply)\n      + instance_tenancy                 = "default"\n      + ipv6_association_id              = (known after apply)\n      + ipv6_cidr_block                  = (known after apply)\n      + main_route_table_id              = (known after apply)\n      + owner_id                         = (known after apply)\n      + tags                             = {\n          + "Name"      = "sample_company-vpc"\n          + "createdBy" = "terraform"\n          + "directory" = "terraform_vpc"\n          + "owner"     = "Sample Company"\n        }\n    }\n\nPlan: 10 to add, 0 to change, 0 to destroy.\n\nChanges to Outputs:\n  + private_subnet_id = (known after apply)\n  + public_subnet_id  = (known after apply)\n  + vpc_id            = (known after apply)\n\n------------------------------------------------------------------------\n\nNote: You didn\'t specify an "-out" parameter to save this plan, so Terraform\ncan\'t guarantee that exactly these actions will be performed if\n"terraform apply" is subsequently run.\n')),o.default.createElement(i.MDXTag,{name:"p",components:t},"And then we can run terraform apply to create (hint: the provider override file contains my aws credentials)"),o.default.createElement(i.MDXTag,{name:"pre",components:t},o.default.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{metaString:null}},'terraform apply -auto-approve\naws_eip.i: Creating...\naws_vpc.vpc: Creating...\naws_eip.i: Creation complete after 1s [id=eipalloc-07a5b6e9969679e9a]\naws_vpc.vpc: Still creating... [10s elapsed]\naws_vpc.vpc: Creation complete after 13s [id=vpc-0ee271c94e219deea]\naws_internet_gateway.igw: Creating...\naws_subnet.subnet_public: Creating...\naws_subnet.subnet_private: Creating...\naws_internet_gateway.igw: Creation complete after 1s [id=igw-083b659e6f53b4b9b]\naws_route_table.i_public: Creating...\naws_subnet.subnet_private: Creation complete after 1s [id=subnet-017347820c7bb83c8]\naws_route_table.i_public: Creation complete after 1s [id=rtb-084443e46fff84c82]\naws_subnet.subnet_public: Still creating... [10s elapsed]\naws_subnet.subnet_public: Creation complete after 11s [id=subnet-0edd369fe4214404d]\naws_route_table_association.i_subnet_public: Creating...\naws_nat_gateway.i: Creating...\naws_route_table_association.i_subnet_public: Creation complete after 1s [id=rtbassoc-0ebf833870a641f5f]\naws_nat_gateway.i: Still creating... [10s elapsed]\naws_nat_gateway.i: Still creating... [20s elapsed]\naws_nat_gateway.i: Still creating... [30s elapsed]\naws_nat_gateway.i: Still creating... [40s elapsed]\naws_nat_gateway.i: Still creating... [50s elapsed]\naws_nat_gateway.i: Still creating... [1m0s elapsed]\naws_nat_gateway.i: Still creating... [1m10s elapsed]\naws_nat_gateway.i: Still creating... [1m20s elapsed]\naws_nat_gateway.i: Still creating... [1m30s elapsed]\naws_nat_gateway.i: Still creating... [1m40s elapsed]\naws_nat_gateway.i: Still creating... [1m50s elapsed]\naws_nat_gateway.i: Creation complete after 1m57s [id=nat-03043971b4a8e4147]\naws_default_route_table.main: Creating...\naws_default_route_table.main: Creation complete after 1s [id=rtb-095d0340369c30ec2]\naws_route_table_association.i_subnet_private: Creating...\naws_route_table_association.i_subnet_private: Creation complete after 1s [id=rtbassoc-04cc0aad7e390cefd]\n\nApply complete! Resources: 10 added, 0 changed, 0 destroyed.\n\nOutputs:\n\nprivate_subnet_id = "subnet-017347820c7bb83c8"\npublic_subnet_id = "subnet-0edd369fe4214404d"\nvpc_id = "vpc-0ee271c94e219deea"\n')),o.default.createElement(i.MDXTag,{name:"p",components:t},"Then we can take a look at the AWS Console to see the results of our terraform run:"),o.default.createElement(s.Image,{p:4,verticalAlign:"middle",src:n.images.VPC_CONSOLE_IMAGE}),o.default.createElement(s.Image,{p:4,verticalAlign:"middle",src:n.images.SUBNET_PRIVATE_IMAGE}),o.default.createElement(s.Image,{p:4,verticalAlign:"middle",src:n.images.SUBNET_PUBLIC_IMAGE}),o.default.createElement(s.Image,{p:4,verticalAlign:"middle",src:n.images.IGW_IMAGE}),o.default.createElement(s.Image,{p:4,verticalAlign:"middle",src:n.images.ROUTE_TABLE_PUBLIC_IMAGE}),o.default.createElement(s.Image,{p:4,verticalAlign:"middle",src:n.images.ROUTE_TABLE_MAIN_IMAGE}),o.default.createElement("br",null),o.default.createElement(i.MDXTag,{name:"p",components:t},"As we can see all our resources were created."),o.default.createElement("br",null),o.default.createElement(i.MDXTag,{name:"p",components:t},"To clean it all up again we can just run destroy:"),o.default.createElement("br",null),o.default.createElement(i.MDXTag,{name:"pre",components:t},o.default.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-json",metaString:""}},"terraform destroy -auto-approve\naws_route_table_association.i_subnet_private: Destroying... [id=rtbassoc-04cc0aad7e390cefd]\naws_route_table_association.i_subnet_public: Destroying... [id=rtbassoc-0ebf833870a641f5f]\naws_route_table_association.i_subnet_private: Destruction complete after 0s\naws_subnet.subnet_private: Destroying... [id=subnet-017347820c7bb83c8]\naws_default_route_table.main: Destroying... [id=rtb-095d0340369c30ec2]\naws_default_route_table.main: Destruction complete after 0s\naws_nat_gateway.i: Destroying... [id=nat-03043971b4a8e4147]\naws_route_table_association.i_subnet_public: Destruction complete after 0s\naws_route_table.i_public: Destroying... [id=rtb-084443e46fff84c82]\naws_subnet.subnet_private: Destruction complete after 1s\naws_route_table.i_public: Destruction complete after 1s\naws_internet_gateway.igw: Destroying... [id=igw-083b659e6f53b4b9b]\naws_nat_gateway.i: Still destroying... [id=nat-03043971b4a8e4147, 10s elapsed]\naws_internet_gateway.igw: Still destroying... [id=igw-083b659e6f53b4b9b, 10s elapsed]\naws_nat_gateway.i: Still destroying... [id=nat-03043971b4a8e4147, 20s elapsed]\naws_internet_gateway.igw: Still destroying... [id=igw-083b659e6f53b4b9b, 20s elapsed]\naws_nat_gateway.i: Still destroying... [id=nat-03043971b4a8e4147, 30s elapsed]\naws_internet_gateway.igw: Still destroying... [id=igw-083b659e6f53b4b9b, 30s elapsed]\naws_nat_gateway.i: Still destroying... [id=nat-03043971b4a8e4147, 40s elapsed]\naws_internet_gateway.igw: Still destroying... [id=igw-083b659e6f53b4b9b, 40s elapsed]\naws_internet_gateway.igw: Destruction complete after 46s\naws_nat_gateway.i: Still destroying... [id=nat-03043971b4a8e4147, 50s elapsed]\naws_nat_gateway.i: Destruction complete after 51s\naws_eip.i: Destroying... [id=eipalloc-07a5b6e9969679e9a]\naws_subnet.subnet_public: Destroying... [id=subnet-0edd369fe4214404d]\naws_subnet.subnet_public: Destruction complete after 1s\naws_vpc.vpc: Destroying... [id=vpc-0ee271c94e219deea]\naws_vpc.vpc: Destruction complete after 0s\naws_eip.i: Destruction complete after 1s\n\nDestroy complete! Resources: 10 destroyed.\n")),o.default.createElement("br",null))}}}]);
//# sourceMappingURL=155.5cebcc01.chunk.js.map