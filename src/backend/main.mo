import Text "mo:core/Text";
import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";

actor {
  type Message = {
    id : Nat;
    name : Text;
    email : Text;
    message : Text;
    timestamp : Int;
  };

  let messages = Map.empty<Nat, Message>();
  var nextId = 0;

  let owners = Map.empty<Principal, Bool>();

  public shared ({ caller }) func addOwner() : async () {
    if (owners.isEmpty()) {
      owners.add(caller, true);
    } else {
      if (not owners.containsKey(caller)) {
        Runtime.trap("Only existing owners can add new owners.");
      };
    };
  };

  public shared ({ caller }) func submitMessage(name : Text, email : Text, message : Text, timestamp : Int) : async Nat {
    let id = nextId;
    let newMessage : Message = {
      id;
      name;
      email;
      message;
      timestamp;
    };
    messages.add(id, newMessage);
    nextId += 1;
    id;
  };

  public shared ({ caller }) func deleteMessage(id : Nat) : async () {
    if (not owners.containsKey(caller)) {
      Runtime.trap("Unauthorized: Only owners can delete messages.");
    };
    if (not messages.containsKey(id)) {
      Runtime.trap("Cannot delete message. Id does not exist.");
    };
    messages.remove(id);
  };

  public query ({ caller }) func getAllMessages() : async [Message] {
    messages.values().toArray();
  };

  public query ({ caller }) func getContactInfo() : async {
    company : Text;
    phone1 : Text;
    phone2 : Text;
    email : Text;
    address : Text;
    pincode : Text;
  } {
    {
      company = "AKANKSHA ENTERPRISES";
      phone1 = "8329880055";
      phone2 = "9765729905";
      email = "b11082004@gmail.com";
      address = "Nagpur Narendra Nagar";
      pincode = "440015";
    };
  };

  public query ({ caller }) func isOwner(user : Principal) : async Bool {
    owners.containsKey(user);
  };
};
