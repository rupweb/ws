#!/usr/local/bin/perl
use CGI::Carp qw(fatalsToBrowser);

$directory = "./";
$print = '1';
$count = "marketscounter.dat";
$log = "marketslog.dat";
$email = "rupert\@webstersystems.co.uk";
$subject = "Someone reading Markets Page";

open (COUNT, "$directory$count");
$counter = <COUNT>;
close (COUNT);
open (COUNT, "> $directory$count");
$counter += 1;
print COUNT "$counter";
close (COUNT);

open (LOG, ">>$log");
print "Content-type: text/plain\n\n ";
print LOG "GMT Date	: = $ENV{'DATE_GMT'}\n";
print LOG "Local Date	: = $ENV{'DATE_LOCAL'}\n";
print LOG "Remote Addr	: = $ENV{'REMOTE_ADDR'}\n";
print LOG "Remote Host	: = $ENV{'REMOTE_HOST'}\n";
print LOG "Remote Port	: = $ENV{'REMOTE_PORT'}\n";
print LOG "\n";
close (LOG);

open(MAIL,"|mail -s $subject $email");
print MAIL "Markets Page Reader\n";
print MAIL "GMT Date	: = $ENV{'DATE_GMT'}\n";
print MAIL "Local Date	: = $ENV{'DATE_LOCAL'}\n";
print MAIL "Remote Addr	: = $ENV{'REMOTE_ADDR'}\n";
print MAIL "Remote Host	: = $ENV{'REMOTE_HOST'}\n";
print MAIL "Remote Port	: = $ENV{'REMOTE_PORT'}\n";
print MAIL "\n";
close(MAIL);

exit;