var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.simple = (function() {

    /**
     * Namespace simple.
     * @exports simple
     * @namespace
     */
    var simple = {};

    simple.Person = (function() {

        /**
         * Properties of a Person.
         * @memberof simple
         * @interface IPerson
         * @property {string} name Person name
         * @property {string} address Person address
         * @property {string} phone_number Person phone_number
         * @property {number} age Person age
         * @property {simple.ILocation|null} [location] Person location
         */

        /**
         * Constructs a new Person.
         * @memberof simple
         * @classdesc Represents a Person.
         * @implements IPerson
         * @constructor
         * @param {simple.IPerson=} [properties] Properties to set
         */
        function Person(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Person name.
         * @member {string} name
         * @memberof simple.Person
         * @instance
         */
        Person.prototype.name = "";

        /**
         * Person address.
         * @member {string} address
         * @memberof simple.Person
         * @instance
         */
        Person.prototype.address = "";

        /**
         * Person phone_number.
         * @member {string} phone_number
         * @memberof simple.Person
         * @instance
         */
        Person.prototype.phone_number = "";

        /**
         * Person age.
         * @member {number} age
         * @memberof simple.Person
         * @instance
         */
        Person.prototype.age = 0;

        /**
         * Person location.
         * @member {simple.ILocation|null|undefined} location
         * @memberof simple.Person
         * @instance
         */
        Person.prototype.location = null;

        /**
         * Creates a new Person instance using the specified properties.
         * @function create
         * @memberof simple.Person
         * @static
         * @param {simple.IPerson=} [properties] Properties to set
         * @returns {simple.Person} Person instance
         */
        Person.create = function create(properties) {
            return new Person(properties);
        };

        /**
         * Encodes the specified Person message. Does not implicitly {@link simple.Person.verify|verify} messages.
         * @function encode
         * @memberof simple.Person
         * @static
         * @param {simple.IPerson} message Person message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Person.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.address);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.phone_number);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.age);
            if (message.location != null && message.hasOwnProperty("location"))
                $root.simple.Location.encode(message.location, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Person message, length delimited. Does not implicitly {@link simple.Person.verify|verify} messages.
         * @function encodeDelimited
         * @memberof simple.Person
         * @static
         * @param {simple.IPerson} message Person message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Person.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Person message from the specified reader or buffer.
         * @function decode
         * @memberof simple.Person
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {simple.Person} Person
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Person.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.simple.Person();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.phone_number = reader.string();
                    break;
                case 4:
                    message.age = reader.int32();
                    break;
                case 5:
                    message.location = $root.simple.Location.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("address"))
                throw $util.ProtocolError("missing required 'address'", { instance: message });
            if (!message.hasOwnProperty("phone_number"))
                throw $util.ProtocolError("missing required 'phone_number'", { instance: message });
            if (!message.hasOwnProperty("age"))
                throw $util.ProtocolError("missing required 'age'", { instance: message });
            return message;
        };

        /**
         * Decodes a Person message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof simple.Person
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {simple.Person} Person
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Person.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Person message.
         * @function verify
         * @memberof simple.Person
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Person.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isString(message.address))
                return "address: string expected";
            if (!$util.isString(message.phone_number))
                return "phone_number: string expected";
            if (!$util.isInteger(message.age))
                return "age: integer expected";
            if (message.location != null && message.hasOwnProperty("location")) {
                var error = $root.simple.Location.verify(message.location);
                if (error)
                    return "location." + error;
            }
            return null;
        };

        return Person;
    })();

    simple.Location = (function() {

        /**
         * Properties of a Location.
         * @memberof simple
         * @interface ILocation
         * @property {string} region Location region
         * @property {string} country Location country
         */

        /**
         * Constructs a new Location.
         * @memberof simple
         * @classdesc Represents a Location.
         * @implements ILocation
         * @constructor
         * @param {simple.ILocation=} [properties] Properties to set
         */
        function Location(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Location region.
         * @member {string} region
         * @memberof simple.Location
         * @instance
         */
        Location.prototype.region = "";

        /**
         * Location country.
         * @member {string} country
         * @memberof simple.Location
         * @instance
         */
        Location.prototype.country = "";

        /**
         * Creates a new Location instance using the specified properties.
         * @function create
         * @memberof simple.Location
         * @static
         * @param {simple.ILocation=} [properties] Properties to set
         * @returns {simple.Location} Location instance
         */
        Location.create = function create(properties) {
            return new Location(properties);
        };

        /**
         * Encodes the specified Location message. Does not implicitly {@link simple.Location.verify|verify} messages.
         * @function encode
         * @memberof simple.Location
         * @static
         * @param {simple.ILocation} message Location message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Location.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.region);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.country);
            return writer;
        };

        /**
         * Encodes the specified Location message, length delimited. Does not implicitly {@link simple.Location.verify|verify} messages.
         * @function encodeDelimited
         * @memberof simple.Location
         * @static
         * @param {simple.ILocation} message Location message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Location.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Location message from the specified reader or buffer.
         * @function decode
         * @memberof simple.Location
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {simple.Location} Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Location.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.simple.Location();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.region = reader.string();
                    break;
                case 2:
                    message.country = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("region"))
                throw $util.ProtocolError("missing required 'region'", { instance: message });
            if (!message.hasOwnProperty("country"))
                throw $util.ProtocolError("missing required 'country'", { instance: message });
            return message;
        };

        /**
         * Decodes a Location message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof simple.Location
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {simple.Location} Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Location.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Location message.
         * @function verify
         * @memberof simple.Location
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Location.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.region))
                return "region: string expected";
            if (!$util.isString(message.country))
                return "country: string expected";
            return null;
        };

        return Location;
    })();

    simple.user_login_c2s = (function() {

        /**
         * Properties of a user_login_c2s.
         * @memberof simple
         * @interface Iuser_login_c2s
         * @property {number} accid user_login_c2s accid
         * @property {number} tstamp user_login_c2s tstamp
         * @property {string} ticket user_login_c2s ticket
         */

        /**
         * Constructs a new user_login_c2s.
         * @memberof simple
         * @classdesc Represents a user_login_c2s.
         * @implements Iuser_login_c2s
         * @constructor
         * @param {simple.Iuser_login_c2s=} [properties] Properties to set
         */
        function user_login_c2s(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * user_login_c2s accid.
         * @member {number} accid
         * @memberof simple.user_login_c2s
         * @instance
         */
        user_login_c2s.prototype.accid = 0;

        /**
         * user_login_c2s tstamp.
         * @member {number} tstamp
         * @memberof simple.user_login_c2s
         * @instance
         */
        user_login_c2s.prototype.tstamp = 0;

        /**
         * user_login_c2s ticket.
         * @member {string} ticket
         * @memberof simple.user_login_c2s
         * @instance
         */
        user_login_c2s.prototype.ticket = "";

        /**
         * Creates a new user_login_c2s instance using the specified properties.
         * @function create
         * @memberof simple.user_login_c2s
         * @static
         * @param {simple.Iuser_login_c2s=} [properties] Properties to set
         * @returns {simple.user_login_c2s} user_login_c2s instance
         */
        user_login_c2s.create = function create(properties) {
            return new user_login_c2s(properties);
        };

        /**
         * Encodes the specified user_login_c2s message. Does not implicitly {@link simple.user_login_c2s.verify|verify} messages.
         * @function encode
         * @memberof simple.user_login_c2s
         * @static
         * @param {simple.Iuser_login_c2s} message user_login_c2s message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        user_login_c2s.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.accid);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.tstamp);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.ticket);
            return writer;
        };

        /**
         * Encodes the specified user_login_c2s message, length delimited. Does not implicitly {@link simple.user_login_c2s.verify|verify} messages.
         * @function encodeDelimited
         * @memberof simple.user_login_c2s
         * @static
         * @param {simple.Iuser_login_c2s} message user_login_c2s message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        user_login_c2s.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a user_login_c2s message from the specified reader or buffer.
         * @function decode
         * @memberof simple.user_login_c2s
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {simple.user_login_c2s} user_login_c2s
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        user_login_c2s.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.simple.user_login_c2s();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accid = reader.int32();
                    break;
                case 2:
                    message.tstamp = reader.int32();
                    break;
                case 3:
                    message.ticket = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("accid"))
                throw $util.ProtocolError("missing required 'accid'", { instance: message });
            if (!message.hasOwnProperty("tstamp"))
                throw $util.ProtocolError("missing required 'tstamp'", { instance: message });
            if (!message.hasOwnProperty("ticket"))
                throw $util.ProtocolError("missing required 'ticket'", { instance: message });
            return message;
        };

        /**
         * Decodes a user_login_c2s message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof simple.user_login_c2s
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {simple.user_login_c2s} user_login_c2s
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        user_login_c2s.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a user_login_c2s message.
         * @function verify
         * @memberof simple.user_login_c2s
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        user_login_c2s.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.accid))
                return "accid: integer expected";
            if (!$util.isInteger(message.tstamp))
                return "tstamp: integer expected";
            if (!$util.isString(message.ticket))
                return "ticket: string expected";
            return null;
        };

        return user_login_c2s;
    })();

    simple.user_login_s2c = (function() {

        /**
         * Properties of a user_login_s2c.
         * @memberof simple
         * @interface Iuser_login_s2c
         * @property {number} flag user_login_s2c flag
         */

        /**
         * Constructs a new user_login_s2c.
         * @memberof simple
         * @classdesc Represents a user_login_s2c.
         * @implements Iuser_login_s2c
         * @constructor
         * @param {simple.Iuser_login_s2c=} [properties] Properties to set
         */
        function user_login_s2c(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * user_login_s2c flag.
         * @member {number} flag
         * @memberof simple.user_login_s2c
         * @instance
         */
        user_login_s2c.prototype.flag = 0;

        /**
         * Creates a new user_login_s2c instance using the specified properties.
         * @function create
         * @memberof simple.user_login_s2c
         * @static
         * @param {simple.Iuser_login_s2c=} [properties] Properties to set
         * @returns {simple.user_login_s2c} user_login_s2c instance
         */
        user_login_s2c.create = function create(properties) {
            return new user_login_s2c(properties);
        };

        /**
         * Encodes the specified user_login_s2c message. Does not implicitly {@link simple.user_login_s2c.verify|verify} messages.
         * @function encode
         * @memberof simple.user_login_s2c
         * @static
         * @param {simple.Iuser_login_s2c} message user_login_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        user_login_s2c.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.flag);
            return writer;
        };

        /**
         * Encodes the specified user_login_s2c message, length delimited. Does not implicitly {@link simple.user_login_s2c.verify|verify} messages.
         * @function encodeDelimited
         * @memberof simple.user_login_s2c
         * @static
         * @param {simple.Iuser_login_s2c} message user_login_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        user_login_s2c.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a user_login_s2c message from the specified reader or buffer.
         * @function decode
         * @memberof simple.user_login_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {simple.user_login_s2c} user_login_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        user_login_s2c.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.simple.user_login_s2c();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.flag = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("flag"))
                throw $util.ProtocolError("missing required 'flag'", { instance: message });
            return message;
        };

        /**
         * Decodes a user_login_s2c message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof simple.user_login_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {simple.user_login_s2c} user_login_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        user_login_s2c.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a user_login_s2c message.
         * @function verify
         * @memberof simple.user_login_s2c
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        user_login_s2c.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.flag))
                return "flag: integer expected";
            return null;
        };

        return user_login_s2c;
    })();

    simple.user_register_c2s = (function() {

        /**
         * Properties of a user_register_c2s.
         * @memberof simple
         * @interface Iuser_register_c2s
         * @property {string} user_name user_register_c2s user_name
         */

        /**
         * Constructs a new user_register_c2s.
         * @memberof simple
         * @classdesc Represents a user_register_c2s.
         * @implements Iuser_register_c2s
         * @constructor
         * @param {simple.Iuser_register_c2s=} [properties] Properties to set
         */
        function user_register_c2s(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * user_register_c2s user_name.
         * @member {string} user_name
         * @memberof simple.user_register_c2s
         * @instance
         */
        user_register_c2s.prototype.user_name = "";

        /**
         * Creates a new user_register_c2s instance using the specified properties.
         * @function create
         * @memberof simple.user_register_c2s
         * @static
         * @param {simple.Iuser_register_c2s=} [properties] Properties to set
         * @returns {simple.user_register_c2s} user_register_c2s instance
         */
        user_register_c2s.create = function create(properties) {
            return new user_register_c2s(properties);
        };

        /**
         * Encodes the specified user_register_c2s message. Does not implicitly {@link simple.user_register_c2s.verify|verify} messages.
         * @function encode
         * @memberof simple.user_register_c2s
         * @static
         * @param {simple.Iuser_register_c2s} message user_register_c2s message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        user_register_c2s.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.user_name);
            return writer;
        };

        /**
         * Encodes the specified user_register_c2s message, length delimited. Does not implicitly {@link simple.user_register_c2s.verify|verify} messages.
         * @function encodeDelimited
         * @memberof simple.user_register_c2s
         * @static
         * @param {simple.Iuser_register_c2s} message user_register_c2s message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        user_register_c2s.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a user_register_c2s message from the specified reader or buffer.
         * @function decode
         * @memberof simple.user_register_c2s
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {simple.user_register_c2s} user_register_c2s
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        user_register_c2s.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.simple.user_register_c2s();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user_name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("user_name"))
                throw $util.ProtocolError("missing required 'user_name'", { instance: message });
            return message;
        };

        /**
         * Decodes a user_register_c2s message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof simple.user_register_c2s
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {simple.user_register_c2s} user_register_c2s
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        user_register_c2s.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a user_register_c2s message.
         * @function verify
         * @memberof simple.user_register_c2s
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        user_register_c2s.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.user_name))
                return "user_name: string expected";
            return null;
        };

        return user_register_c2s;
    })();

    simple.user_register_s2c = (function() {

        /**
         * Properties of a user_register_s2c.
         * @memberof simple
         * @interface Iuser_register_s2c
         * @property {number} flag user_register_s2c flag
         */

        /**
         * Constructs a new user_register_s2c.
         * @memberof simple
         * @classdesc Represents a user_register_s2c.
         * @implements Iuser_register_s2c
         * @constructor
         * @param {simple.Iuser_register_s2c=} [properties] Properties to set
         */
        function user_register_s2c(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * user_register_s2c flag.
         * @member {number} flag
         * @memberof simple.user_register_s2c
         * @instance
         */
        user_register_s2c.prototype.flag = 0;

        /**
         * Creates a new user_register_s2c instance using the specified properties.
         * @function create
         * @memberof simple.user_register_s2c
         * @static
         * @param {simple.Iuser_register_s2c=} [properties] Properties to set
         * @returns {simple.user_register_s2c} user_register_s2c instance
         */
        user_register_s2c.create = function create(properties) {
            return new user_register_s2c(properties);
        };

        /**
         * Encodes the specified user_register_s2c message. Does not implicitly {@link simple.user_register_s2c.verify|verify} messages.
         * @function encode
         * @memberof simple.user_register_s2c
         * @static
         * @param {simple.Iuser_register_s2c} message user_register_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        user_register_s2c.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.flag);
            return writer;
        };

        /**
         * Encodes the specified user_register_s2c message, length delimited. Does not implicitly {@link simple.user_register_s2c.verify|verify} messages.
         * @function encodeDelimited
         * @memberof simple.user_register_s2c
         * @static
         * @param {simple.Iuser_register_s2c} message user_register_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        user_register_s2c.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a user_register_s2c message from the specified reader or buffer.
         * @function decode
         * @memberof simple.user_register_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {simple.user_register_s2c} user_register_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        user_register_s2c.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.simple.user_register_s2c();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.flag = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("flag"))
                throw $util.ProtocolError("missing required 'flag'", { instance: message });
            return message;
        };

        /**
         * Decodes a user_register_s2c message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof simple.user_register_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {simple.user_register_s2c} user_register_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        user_register_s2c.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a user_register_s2c message.
         * @function verify
         * @memberof simple.user_register_s2c
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        user_register_s2c.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.flag))
                return "flag: integer expected";
            return null;
        };

        return user_register_s2c;
    })();

    return simple;
})();